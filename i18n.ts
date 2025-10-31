import { Question } from './types';

interface Translations {
  welcomeTitle: string;
  welcomeDescription: string;
  startButton: string;
  loadingTitle: string;
  loadingSubtitle: string;
  quizProgress: string; // e.g., "Question {current} / {total}"
  resultsTitle: string;
  personalityTypeResult: string; // e.g., "You are the \"{type}\" type"
  strengthsTitle: string;
  weaknessesTitle: string;
  compatibilityTitle: string;
  restartButton: string;
  questions: Question[];
}

export const translations: Record<string, Translations> = {
  ja: {
    welcomeTitle: 'AI性格診断クイズ',
    welcomeDescription: '10個の簡単な質問に答えて、あなたの隠れた性格、強み、そして未来のパートナーとの相性を発見しましょう！',
    startButton: '診断を始める',
    loadingTitle: '結果を分析中...',
    loadingSubtitle: 'あなたの性格を読み解いています。',
    quizProgress: '質問 {current} / {total}',
    resultsTitle: '診断結果',
    personalityTypeResult: 'あなたは「{type}」タイプ',
    strengthsTitle: 'あなたの長所',
    weaknessesTitle: 'あなたの短所',
    compatibilityTitle: '相性のいい人',
    restartButton: 'もう一度診断する',
    questions: [
        { text: '休日の過ごし方は？', options: [{ id: 'A', text: '大勢で集まってアクティブに' }, { id: 'B', text: '少人数の親しい友人とまったり' }, { id: 'C', text: '一人で趣味に没頭する' }, { id: 'D', text: '家でゆっくりと休む' }] },
        { text: '新しいプロジェクトを始める時、あなたの役割は？', options: [{ id: 'A', text: 'リーダーとして皆を引っ張る' }, { id: 'B', text: 'アイデアを出すムードメーカー' }, { id: 'C', text: '計画を立てて着実に進める' }, { id: 'D', text: 'サポート役として縁の下の力持ち' }] },
        { text: '困難な問題に直面したらどうする？', options: [{ id: 'A', text: 'すぐに行動して解決策を探す' }, { id: 'B', text: '信頼できる人に相談する' }, { id: 'C', text: 'じっくり分析して最適な方法を考える' }, { id: 'D', text: '一旦距離を置いて冷静になる' }] },
        { text: '旅行の計画を立てるなら？', options: [{ id: 'A', text: '行き当たりばったりの冒険旅行' }, { id: 'B', text: '有名な観光地を巡る定番旅行' }, { id: 'C', text: '癒やしを求めるリラックス旅行' }, { id: 'D', text: '詳細なスケジュールを組んだ完璧な旅行' }] },
        { text: '友人から悩みを打ち明けられたら？', options: [{ id: 'A', text: '具体的なアドバイスをしてあげる' }, { id: 'B', text: 'ただ静かに話を聞いて共感する' }, { id: 'C', text: '一緒に解決策を考えてあげる' }, { id: 'D', text: '気分転換にどこかへ連れ出す' }] },
        { text: '自分の部屋はどんな状態？', options: [{ id: 'A', text: 'いつも整理整頓されている' }, { id: 'B', text: '好きなものに囲まれて少し散らかっている' }, { id: 'C', text: 'シンプルで物が少ない' }, { id: 'D', text: '散らかっているが、どこに何があるか把握している' }] },
        { text: '初対面の人との会話は？', options: [{ id: 'A', text: '自分から積極的に話しかける' }, { id: 'B', text: '相手の話を聞くのが得意' }, { id: 'C', text: '少し緊張してしまう' }, { id: 'D', text: '必要最低限の会話しかしない' }] },
        { text: '仕事や勉強で重視することは？', options: [{ id: 'A', text: '結果や成果を出すこと' }, { id: 'B', text: 'チームワークや協調性' }, { id: 'C', text: '自分のペースで着実に進めること' }, { id: 'D', text: '新しい知識やスキルを学ぶこと' }] },
        { text: 'ストレスが溜まった時の解消法は？', options: [{ id: 'A', text: '運動して汗を流す' }, { id: 'B', text: '友達とおしゃべりする' }, { id: 'C', text: '好きな音楽を聴いたり、映画を観る' }, { id: 'D', text: '美味しいものを食べる' }] },
        { text: 'あなたが一番大切にしている価値観は？', options: [{ id: 'A', text: '挑戦と成長' }, { id: 'B', text: '人との繋がりや愛情' }, { id: 'C', text: '平和と安定' }, { id: 'D', text: '自由と独立' }] },
    ],
  },
  en: {
    welcomeTitle: 'AI Personality Quiz',
    welcomeDescription: 'Answer 10 simple questions to discover your hidden personality, strengths, and compatibility with a future partner!',
    startButton: 'Start Quiz',
    loadingTitle: 'Analyzing Results...',
    loadingSubtitle: 'Decoding your personality.',
    quizProgress: 'Question {current} / {total}',
    resultsTitle: 'Your Results',
    personalityTypeResult: 'You are the "{type}" type',
    strengthsTitle: 'Your Strengths',
    weaknessesTitle: 'Your Weaknesses',
    compatibilityTitle: 'Good Compatibility With',
    restartButton: 'Take the Quiz Again',
    questions: [
      { text: 'How do you spend your days off?', options: [{ id: 'A', text: 'Actively with a large group' }, { id: 'B', text: 'Relaxing with a few close friends' }, { id: 'C', text: 'Immersed in a hobby by myself' }, { id: 'D', text: 'Resting quietly at home' }] },
      { text: 'When starting a new project, what is your role?', options: [{ id: 'A', text: 'Leading everyone as the leader' }, { id: 'B', text: 'The mood-maker who comes up with ideas' }, { id: 'C', text: 'Making a plan and proceeding steadily' }, { id: 'D', text: 'The unsung hero who provides support' }] },
      { text: 'What do you do when faced with a difficult problem?', options: [{ id: 'A', text: 'Act immediately to find a solution' }, { id: 'B', text: 'Consult with someone I trust' }, { id: 'C', text: 'Analyze carefully to find the best method' }, { id: 'D', text: 'Step back to calm down' }] },
      // FIX: Added missing 'text' property key.
      { text: 'If you were to plan a trip?', options: [{ id: 'A', text: 'A spontaneous adventure' }, { id: 'B', text: 'A classic tour of famous spots' }, { id: 'C', text: 'A relaxing trip for healing' }, { id: 'D', text: 'A perfect trip with a detailed schedule' }] },
      { text: 'If a friend confides in you about their problems?', options: [{ id: 'A', text: 'Give them concrete advice' }, { id: 'B', text: 'Just listen quietly and empathize' }, { id: 'C', text: 'Think of a solution together' }, { id: 'D', text: 'Take them somewhere to change the mood' }] },
      { text: 'What is your room like?', options: [{ id: 'A', text: 'Always neat and tidy' }, { id: 'B', text: 'A bit messy, surrounded by my favorite things' }, { id: 'C', text: 'Simple with few items' }, { id: 'D', text: 'Messy, but I know where everything is' }] },
      { text: 'How are you at conversations with new people?', options: [{ id: 'A', text: 'I actively start conversations' }, { id: 'B', text: 'I am good at listening to others' }, { id: 'C', text: 'I get a little nervous' }, { id: 'D', text: 'I only have the necessary conversations' }] },
      { text: 'What do you prioritize in work or study?', options: [{ id: 'A', text: 'Achieving results and outcomes' }, { id: 'B', text: 'Teamwork and cooperation' }, { id: 'C', text: 'Proceeding steadily at my own pace' }, { id: 'D', text: 'Learning new knowledge and skills' }] },
      { text: 'How do you relieve stress?', options: [{ id: 'A', text: 'Exercising and sweating' }, { id: 'B', text: 'Chatting with friends' }, { id: 'C', text: 'Listening to my favorite music or watching movies' }, { id: 'D', text: 'Eating delicious food' }] },
      { text: 'What is the value you cherish the most?', options: [{ id: 'A', text: 'Challenge and growth' }, { id: 'B', text: 'Connections with people and love' }, { id: 'C', text: 'Peace and stability' }, { id: 'D', text: 'Freedom and independence' }] },
    ],
  },
  ko: {
    welcomeTitle: 'AI 성격 진단 퀴즈',
    welcomeDescription: '10개의 간단한 질문에 답하여 당신의 숨겨진 성격, 강점, 그리고 미래의 파트너와의 궁합을 발견해보세요!',
    startButton: '진단 시작하기',
    loadingTitle: '결과 분석 중...',
    loadingSubtitle: '당신의 성격을 분석하고 있습니다.',
    quizProgress: '질문 {current} / {total}',
    resultsTitle: '진단 결과',
    personalityTypeResult: '당신은 "{type}" 타입',
    strengthsTitle: '당신의 장점',
    weaknessesTitle: '당신의 단점',
    compatibilityTitle: '궁합이 잘 맞는 사람',
    restartButton: '다시 진단하기',
    questions: [
      { text: '휴일을 어떻게 보내시나요?', options: [{ id: 'A', text: '여럿이 모여 활발하게' }, { id: 'B', text: '소수의 친한 친구들과 느긋하게' }, { id: 'C', text: '혼자서 취미에 몰두하기' }, { id: 'D', text: '집에서 편안하게 쉬기' }] },
      { text: '새로운 프로젝트를 시작할 때 당신의 역할은?', options: [{ id: 'A', text: '리더로서 모두를 이끈다' }, { id: 'B', text: '아이디어를 내는 분위기 메이커' }, { id: 'C', text: '계획을 세워 착실하게 진행한다' }, { id: 'D', text: '지원 역할로서 뒤에서 돕는다' }] },
      { text: '어려운 문제에 직면했을 때 어떻게 하나요?', options: [{ id: 'A', text: '즉시 행동하여 해결책을 찾는다' }, { id: 'B', text: '신뢰할 수 있는 사람과 상담한다' }, { id: 'C', text: '차분히 분석하여 최적의 방법을 생각한다' }, { id: 'D', text: '일단 거리를 두고 침착해진다' }] },
      { text: '여행 계획을 세운다면?', options: [{ id: 'A', text: '즉흥적인 모험 여행' }, { id: 'B', text: '유명 관광지를 도는 정석 여행' }, { id: 'C', text: '힐링을 위한 휴식 여행' }, { id: 'D', text: '상세한 일정을 짠 완벽한 여행' }] },
      { text: '친구가 고민을 털어놓으면?', options: [{ id: 'A', text: '구체적인 조언을 해준다' }, { id: 'B', text: '그저 조용히 이야기를 들어주고 공감한다' }, { id: 'C', text: '함께 해결책을 생각해준다' }, { id: 'D', text: '기분 전환을 위해 어디론가 데려간다' }] },
      { text: '당신의 방은 어떤 상태인가요?', options: [{ id: 'A', text: '항상 정리정돈되어 있다' }, { id: 'B', text: '좋아하는 물건에 둘러싸여 조금 어질러져 있다' }, { id: 'C', text: '심플하고 물건이 적다' }, { id: 'D', text: '어질러져 있지만 어디에 무엇이 있는지 파악하고 있다' }] },
      { text: '처음 만나는 사람과의 대화는?', options: [{ id: 'A', text: '스스로 적극적으로 말을 건다' }, { id: 'B', text: '상대방의 이야기를 듣는 것을 잘한다' }, { id: 'C', text: '조금 긴장한다' }, { id: 'D', text: '필요 최소한의 대화만 한다' }] },
      { text: '일이나 공부에서 중요하게 생각하는 것은?', options: [{ id: 'A', text: '결과나 성과를 내는 것' }, { id: 'B', text: '팀워크나 협조성' }, { id: 'C', text: '자신의 페이스대로 착실하게 진행하는 것' }, { id: 'D', text: '새로운 지식이나 기술을 배우는 것' }] },
      { text: '스트레스가 쌓였을 때 해소법은?', options: [{ id: 'A', text: '운동하며 땀을 흘린다' }, { id: 'B', text: '친구들과 수다를 떤다' }, { id: 'C', text: '좋아하는 음악을 듣거나 영화를 본다' }, { id: 'D', text: '맛있는 것을 먹는다' }] },
      { text: '당신이 가장 소중히 여기는 가치관은?', options: [{ id: 'A', text: '도전과 성장' }, { id: 'B', text: '사람과의 관계나 애정' }, { id: 'C', text: '평화와 안정' }, { id: 'D', text: '자유와 독립' }] },
    ],
  },
  zh: {
    welcomeTitle: 'AI性格测试问答',
    welcomeDescription: '回答10个简单问题，发现你隐藏的性格、优点以及与未来伴侣的契合度！',
    startButton: '开始测试',
    loadingTitle: '正在分析结果...',
    loadingSubtitle: '正在解读您的性格。',
    quizProgress: '问题 {current} / {total}',
    resultsTitle: '诊断结果',
    personalityTypeResult: '你是“{type}”类型',
    strengthsTitle: '你的优点',
    weaknessesTitle: '你的缺点',
    compatibilityTitle: '与你合得来的人',
    restartButton: '再试一次',
    questions: [
      { text: '你如何度过假期？', options: [{ id: 'A', text: '和一大群人一起积极活动' }, { id: 'B', text: '和少数亲密朋友悠闲度过' }, { id: 'C', text: '独自沉浸在爱好中' }, { id: 'D', text: '在家悠闲休息' }] },
      { text: '开始一个新项目时，你的角色是？', options: [{ id: 'A', text: '作为领导者带领大家' }, { id: 'B', text: '提出想法的气氛制造者' }, { id: 'C', text: '制定计划并稳步推进' }, { id: 'D', text: '作为支持者在幕后默默付出' }] },
      { text: '面对困难问题时你会怎么做？', options: [{ id: 'A', text: '立即行动寻找解决方案' }, { id: 'B', text: '与值得信赖的人商量' }, { id: 'C', text: '仔细分析思考最佳方法' }, { id: 'D', text: '暂时保持距离，冷静下来' }] },
      { text: '如果计划旅行？', options: [{ id: 'A', text: '随心所欲的冒险旅行' }, { id: 'B', text: '游览著名景点的经典旅行' }, { id: 'C', text: '寻求治愈的放松旅行' }, { id: 'D', text: '制定详细时间表的完美旅行' }] },
      { text: '如果朋友向你倾诉烦恼？', options: [{ id: 'A', text: '给予具体的建议' }, { id: 'B', text: '只是安静地倾听并表示同情' }, { id: 'C', text: '一起思考解决方案' }, { id: 'D', text: '带他们出去散心' }] },
      { text: '你的房间是什么样的？', options: [{ id: 'A', text: '总是整洁有序' }, { id: 'B', text: '被喜欢的东西包围，有点乱' }, { id: 'C', text: '简约，东西很少' }, { id: 'D', text: '虽然乱，但我知道东西在哪里' }] },
      { text: '与初次见面的人交谈如何？', options: [{ id: 'A', text: '我主动搭话' }, { id: 'B', text: '我擅长倾听对方' }, { id: 'C', text: '我会有点紧张' }, { id: 'D', text: '只进行必要的对话' }] },
      { text: '在工作或学习中你重视什么？', options: [{ id: 'A', text: '取得结果和成就' }, { id: 'B', text: '团队合作和协调性' }, { id: 'C', text: '按照自己的节奏稳步前进' }, { id: 'D', text: '学习新知识和技能' }] },
      { text: '压力大时如何解压？', options: [{ id: 'A', text: '运动流汗' }, { id: 'B', text: '和朋友聊天' }, { id: 'C', text: '听喜欢的音乐或看电影' }, { id: 'D', text: '吃好吃的东西' }] },
      { text: '你最珍视的价值观是什么？', options: [{ id: 'A', text: '挑战与成长' }, { id: 'B', text: '人际关系与爱情' }, { id: 'C', text: '和平与稳定' }, { id: 'D', text: '自由与独立' }] },
    ],
  },
};