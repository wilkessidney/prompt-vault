/**
 * 分类体系定义（唯一真源）
 * 修改分类后重新运行 `npm run build` 即可生效。
 *
 * id      : 一级分类 slug（对应 prompts/ 下的目录名）
 * name    : 显示名
 * icon    : assets 中使用的图标 key
 * color   : 主题色（用于卡片标签、侧栏高亮）
 * desc    : 一句话说明
 * subs    : 二级分类（id 对应 prompts/<cat>/<sub>/ 目录名）
 */

export const TAXONOMY = [
  {
    id: 'coding',
    name: '代码开发',
    icon: 'code',
    color: '#6366f1',
    desc: '写代码、改代码、审代码的全流程提示词',
    subs: [
      { id: 'generate', name: '代码生成' },
      { id: 'refactor', name: '重构优化' },
      { id: 'review', name: '代码审查' },
      { id: 'debug', name: '调试排错' },
      { id: 'testing', name: '测试编写' },
      { id: 'architecture', name: '架构设计' },
      { id: 'database', name: '数据库与 SQL' },
      { id: 'devops', name: 'DevOps 与部署' },
      { id: 'regex', name: '正则表达式' },
      { id: 'docs', name: '技术文档' },
    ],
  },
  {
    id: 'ui',
    name: 'UI 组件',
    icon: 'cube',
    color: '#0ea5e9',
    desc: '前端界面组件的生成提示词：首屏、导航、表单、面板、定价页等',
    subs: [
      { id: 'hero', name: '首屏 Hero' },
      { id: 'nav', name: '导航与菜单' },
      { id: 'auth', name: '登录与权限' },
      { id: 'onboarding', name: '新手引导' },
      { id: 'pricing', name: '定价与结算' },
      { id: 'features', name: '功能展示' },
      { id: 'dashboards', name: '数据面板' },
      { id: 'stats', name: '指标与图表' },
      { id: 'cta', name: '行动召唤' },
      { id: 'testimonials', name: '客户证言' },
      { id: 'faq', name: '帮助与 FAQ' },
      { id: 'contact', name: '联系与支持' },
      { id: 'footer', name: '页脚' },
      { id: 'bonus', name: '实用小组件' },
    ],
  },
  {
    id: 'image',
    name: '图像生成',
    icon: 'image',
    color: '#ec4899',
    desc: 'Midjourney / SD / Flux 等绘图模型的提示词',
    subs: [
      { id: 'photo', name: '写实摄影' },
      { id: 'illustration', name: '插画与平面' },
      { id: 'render3d', name: '3D 与渲染' },
      { id: 'product', name: '产品与电商图' },
      { id: 'character', name: '角色与人物' },
      { id: 'scene', name: '场景与建筑' },
      { id: 'logo', name: 'Logo 与图标' },
      { id: 'poster', name: '海报与排版' },
      { id: 'edit', name: '图像编辑与修复' },
    ],
  },
  {
    id: 'media',
    name: '视频与音频',
    icon: 'video',
    color: '#f97316',
    desc: '视频脚本、分镜、AI 视频、配音与音乐',
    subs: [
      { id: 'script', name: '视频脚本' },
      { id: 'storyboard', name: '分镜与运镜' },
      { id: 'aivideo', name: 'AI 视频生成' },
      { id: 'voiceover', name: '配音与语音' },
      { id: 'music', name: '音乐生成' },
      { id: 'podcast', name: '播客与剪辑' },
    ],
  },
  {
    id: 'writing',
    name: '写作与内容',
    icon: 'pen',
    color: '#0ea5e9',
    desc: '长文、社媒、标题、故事、翻译与润色',
    subs: [
      { id: 'article', name: '长文与文章' },
      { id: 'blog', name: '博客与专栏' },
      { id: 'social', name: '社媒文案' },
      { id: 'headline', name: '标题与钩子' },
      { id: 'fiction', name: '故事与小说' },
      { id: 'poetry', name: '诗歌与歌词' },
      { id: 'email', name: '邮件与信函' },
      { id: 'rewrite', name: '改写与润色' },
      { id: 'translation', name: '翻译与本地化' },
    ],
  },
  {
    id: 'research',
    name: '研究与学习',
    icon: 'book',
    color: '#14b8a6',
    desc: '概念讲解、文献综述、论文与深度调研',
    subs: [
      { id: 'explain', name: '概念讲解' },
      { id: 'literature', name: '文献综述' },
      { id: 'academic', name: '论文写作' },
      { id: 'feynman', name: '费曼学习法' },
      { id: 'mindmap', name: '知识梳理与脑图' },
      { id: 'exam', name: '考试与刷题' },
      { id: 'deepresearch', name: '深度调研' },
    ],
  },
  {
    id: 'data',
    name: '数据分析',
    icon: 'chart',
    color: '#8b5cf6',
    desc: '数据清洗、SQL、可视化、统计与报表',
    subs: [
      { id: 'cleaning', name: '数据清洗' },
      { id: 'sql', name: 'SQL 查询' },
      { id: 'viz', name: '可视化图表' },
      { id: 'stats', name: '统计分析' },
      { id: 'reporting', name: '报表与洞察' },
      { id: 'pandas', name: 'Python / Pandas' },
    ],
  },
  {
    id: 'productivity',
    name: '办公与效率',
    icon: 'bolt',
    color: '#eab308',
    desc: '会议纪要、周报、任务拆解与信息摘要',
    subs: [
      { id: 'meeting', name: '会议纪要' },
      { id: 'weekly', name: '周报与汇报' },
      { id: 'task', name: '任务拆解' },
      { id: 'time', name: '时间与日程' },
      { id: 'emailmgmt', name: '邮件处理' },
      { id: 'spreadsheet', name: '表格与公式' },
      { id: 'summary', name: '信息摘要' },
    ],
  },
  {
    id: 'product',
    name: '产品与设计',
    icon: 'cube',
    color: '#22c55e',
    desc: 'PRD、用户研究、竞品分析与 UI 组件',
    subs: [
      { id: 'prd', name: 'PRD 与需求' },
      { id: 'research', name: '用户研究' },
      { id: 'competitor', name: '竞品分析' },
      { id: 'uxcopy', name: '交互与 UX 文案' },
      { id: 'uicomponent', name: 'UI 组件提示' },
      { id: 'metrics', name: '指标与数据' },
      { id: 'roadmap', name: '路线图规划' },
    ],
  },
  {
    id: 'business',
    name: '商业与创业',
    icon: 'briefcase',
    color: '#0ea5e9',
    desc: '商业计划、市场分析、财务建模与融资',
    subs: [
      { id: 'bp', name: '商业计划书' },
      { id: 'market', name: '市场分析' },
      { id: 'strategy', name: '战略规划' },
      { id: 'finance', name: '财务建模' },
      { id: 'pitch', name: '融资路演' },
      { id: 'legal', name: '合同与法务' },
      { id: 'customer', name: '客户沟通' },
    ],
  },
  {
    id: 'marketing',
    name: '营销与增长',
    icon: 'megaphone',
    color: '#f43f5e',
    desc: '品牌定位、广告文案、SEO 与内容增长',
    subs: [
      { id: 'branding', name: '品牌定位' },
      { id: 'ads', name: '广告投放文案' },
      { id: 'seo', name: 'SEO 优化' },
      { id: 'cnsocial', name: '小红书 / 抖音' },
      { id: 'community', name: '私域与社群' },
      { id: 'campaign', name: '活动策划' },
      { id: 'sales', name: '销售话术' },
    ],
  },
  {
    id: 'prompteng',
    name: '提示词工程',
    icon: 'sparkles',
    color: '#a855f7',
    desc: '提示词优化、结构化输出、推理链与 System Prompt',
    subs: [
      { id: 'optimize', name: '提示词优化' },
      { id: 'structured', name: '结构化输出' },
      { id: 'cot', name: '思维链与推理' },
      { id: 'fewshot', name: 'Few-shot 模板' },
      { id: 'persona', name: '角色设定' },
      { id: 'antihallucination', name: '幻觉抑制' },
      { id: 'system', name: 'System Prompt' },
    ],
  },
  {
    id: 'play',
    name: '角色扮演与娱乐',
    icon: 'gamepad',
    color: '#64748b',
    desc: '模拟面试、语言陪练、跑团与教练对话',
    subs: [
      { id: 'interview', name: '模拟面试官' },
      { id: 'language', name: '语言陪练' },
      { id: 'rpg', name: '桌游与叙事' },
      { id: 'coach', name: '心理与教练' },
      { id: 'games', name: '游戏与解谜' },
      { id: 'life', name: '生活助理' },
    ],
  },
];

export const CATEGORY_MAP = new Map(TAXONOMY.map((c) => [c.id, c]));

export function subName(catId, subId) {
  const cat = CATEGORY_MAP.get(catId);
  if (!cat) return subId;
  const sub = cat.subs.find((s) => s.id === subId);
  return sub ? sub.name : subId;
}
