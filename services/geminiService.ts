import { GoogleGenAI, Type } from "@google/genai";
import { Answer, PersonalityResult, Language } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const getLanguageName = (code: Language): string => {
  switch (code) {
    case 'en': return 'English';
    case 'ja': return 'Japanese';
    case 'ko': return 'Korean';
    case 'zh': return 'Chinese';
    default: return 'Japanese';
  }
};

const schemaTranslations = {
    ja: {
        personalityType: 'ユーザーの性格タイプをキャッチーな一言で表現してください。例：「情熱的な冒険家」',
        strengths: 'ユーザーの性格的な長所。2～3点挙げてください。',
        weaknesses: 'ユーザーの性格的な短所。建設的な表現で、2～3点挙げてください。',
        compatibility: 'ユーザーと相性の良い人物像についての説明。',
        compTitle: '相性の良いタイプを表すキャッチーなタイトル。例：「頼りになるリーダータイプ」',
        compDesc: '相性の良いタイプに関する詳細な説明。'
    },
    en: {
        personalityType: "A catchy, one-sentence summary of the user's personality type. e.g., 'Passionate Adventurer'",
        strengths: "The user's personality strengths. List 2-3 points.",
        weaknesses: "The user's personality weaknesses. Use constructive phrasing and list 2-3 points.",
        compatibility: "A description of a personality type compatible with the user.",
        compTitle: "A catchy title for the compatible type. e.g., 'Reliable Leader Type'",
        compDesc: "A detailed description of the compatible type."
    },
    ko: {
        personalityType: '사용자의 성격 유형을 한마디로 표현해주세요. 예: "열정적인 모험가"',
        strengths: '사용자의 성격적 장점. 2~3가지를 들어주세요.',
        weaknesses: '사용자의 성격적 단점. 건설적인 표현으로 2~3가지를 들어주세요.',
        compatibility: '사용자와 잘 맞는 인물상에 대한 설명.',
        compTitle: '궁합이 잘 맞는 유형을 나타내는 재치 있는 제목. 예: "믿음직한 리더 타입"',
        compDesc: '궁합이 잘 맞는 유형에 대한 상세한 설명.'
    },
    zh: {
        personalityType: '用一句话概括用户的性格类型。例如：“热情的冒险家”',
        strengths: '用户的性格优点。请列出2-3点。',
        weaknesses: '用户的性格缺点。请使用建设性的措辞，列出2-3点。',
        compatibility: '关于与用户相合的人格类型的描述。',
        compTitle: '为相合类型起一个吸引人的标题。例如：“可靠的领导者类型”',
        compDesc: '关于相合类型的详细描述。'
    },
};

const getResponseSchema = (lang: Language) => {
    const t = schemaTranslations[lang];
    return {
        type: Type.OBJECT,
        properties: {
            personalityType: { type: Type.STRING, description: t.personalityType },
            strengths: { type: Type.ARRAY, description: t.strengths, items: { type: Type.STRING } },
            weaknesses: { type: Type.ARRAY, description: t.weaknesses, items: { type: Type.STRING } },
            compatibility: {
                type: Type.OBJECT,
                description: t.compatibility,
                properties: {
                    title: { type: Type.STRING, description: t.compTitle },
                    description: { type: Type.STRING, description: t.compDesc },
                },
                required: ['title', 'description'],
            },
        },
        required: ['personalityType', 'strengths', 'weaknesses', 'compatibility'],
    }
};


export async function analyzePersonality(answers: Answer[], language: Language): Promise<PersonalityResult> {
  const languageName = getLanguageName(language);
  const prompt = `
    You are a professional personality analyst. Based on the following 10 quiz answers, analyze the user's personality.
    Provide the analysis of their personality type, strengths, weaknesses, and a compatible person type strictly following the provided JSON schema.
    Your response MUST be in ${languageName}.
    The analysis should be insightful, positive, and encouraging.

    【Quiz Answers】
    ${answers.map((a, index) => `Q${index + 1}: ${a.question}\nA${index + 1}: ${a.answer}`).join('\n\n')}
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: getResponseSchema(language),
        temperature: 0.8,
      },
    });

    const jsonText = response.text.trim();
    const result = JSON.parse(jsonText);
    return result as PersonalityResult;

  } catch (error) {
    console.error("Error analyzing personality:", error);
    // In case of an error, return a default error message structure
    // This makes the UI resilient to API failures
    return {
        personalityType: "Analysis Failed",
        strengths: ["An error occurred during analysis."],
        weaknesses: ["Please try again."],
        compatibility: {
            title: "Error",
            description: "Failed to communicate with the API. Please try again later."
        }
    }
  }
}