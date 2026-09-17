export const trackMeta = {
	core: { label: 'Three.js 核心', color: '#049ef4' },
	shader: { label: 'Shader / 图形学', color: '#7c5cff' },
	webgpu: { label: 'WebGPU / TSL', color: '#16a46c' },
	ecosystem: { label: '实战 / 生态', color: '#f28c28' }
};

export const resources = [
	{
		name: 'Discover Three.js 中文版',
		url: 'https://discoverthreejs.com/zh/book/',
		track: 'core', languages: [ 'zh', 'en' ], price: 'free', level: 'beginner',
		topics: [ '场景', '相机', '渲染器', '动画', '灯光', '材质', '纹理', 'glTF' ],
		summary: '系统化免费教程，从场景、相机、渲染器和动画入门，逐步覆盖灯光、材质、纹理、控制器、glTF 加载与 JavaScript 模块。',
		audience: '会一点 JavaScript，希望用中文完成第一个 3D Web 项目的初学者。',
		note: '适合学概念；涉及具体 API 时请回到本站 r186 文档核对。',
		reuse: '仅链接 · 正文不可镜像'
	},
	{
		name: 'Three.js 官方 Examples',
		url: 'https://threejs.org/examples/',
		track: 'core', languages: [ 'en' ], price: 'free', level: 'intermediate',
		topics: [ 'WebGL', 'WebGPU', '材质', '加载器', '后处理', 'Shader', 'WebXR' ],
		summary: '官方维护的可运行示例目录，覆盖 WebGL、WebGPU、加载器、后处理、着色器、WebXR 与物理等能力，适合边运行边读源码。',
		audience: '已经掌握场景、相机与渲染循环，用它查 API 和拆效果的学习者。',
		note: '它是功能样本库，不是线性课程；优先关注与你当前版本一致的示例。',
		reuse: '仅链接 · 资产许可需单独核对'
	},
	{
		name: 'SBCode Three.js Tutorials',
		url: 'https://sbcode.net/threejs/',
		track: 'core', languages: [ 'en' ], price: 'freemium', level: 'intermediate',
		topics: [ 'TypeScript', 'addons', 'GLTF', '动画', '物理', 'WebGPU', '部署' ],
		summary: '免费在线文档配合可选视频课程，从 TypeScript 和 Three.js 基础推进到 addons、GLTF、动画、物理、WebGPU 与部署。',
		audience: '希望用 TypeScript 系统练习，并从开发环境一路做到部署的学习者。',
		note: '视频部分需要 Udemy 或 YouTube 会员；示例版本需要自行留意。',
		reuse: '仅链接 · 未提供整站镜像授权'
	},
	{
		name: 'Three.js Journey',
		url: 'https://threejs-journey.com/',
		track: 'ecosystem', languages: [ 'en' ], price: 'paid', level: 'beginner',
		topics: [ 'Three.js 基础', 'Blender', '物理', '交互', 'Shader', '项目实战' ],
		summary: 'Bruno Simon 的结构化视频课程，从零搭建场景，逐步进入材质、后处理、交互、着色器和完整项目；另有 WebGPU/TSL 课程。',
		audience: '希望由一套完整项目课程从基础走到高级，并能接受英文视频的人。',
		note: '主体付费，价格和课程范围会变化；本站不转载任何课程内容。',
		reuse: '仅链接 · 付费版权内容'
	},
	{
		name: 'Codrops Tutorials',
		url: 'https://tympanus.net/codrops/hub/tutorials/',
		track: 'ecosystem', languages: [ 'en' ], price: 'free', level: 'advanced',
		topics: [ '创意前端', 'Three.js', 'WebGPU', 'GLSL', 'TSL', '粒子', 'GSAP' ],
		summary: '聚焦创意前端和视觉实验，常以 Three.js、WebGL/WebGPU、GLSL/TSL、后处理、粒子和滚动交互拆解完整效果。',
		audience: '已掌握 Three.js 基础，想研究高级动效与沉浸式网页表现的开发者。',
		note: '不同文章由不同作者提供，代码和素材许可需要逐篇确认。',
		reuse: '仅链接 · 遵循单篇许可'
	},
	{
		name: 'The Book of Shaders 中文版',
		url: 'https://thebookofshaders.com/?lan=ch',
		track: 'shader', languages: [ 'zh', 'en' ], price: 'free', level: 'beginner',
		topics: [ 'Fragment Shader', 'GLSL', '噪声', '纹理', '光照', 'Ray Marching' ],
		summary: '以片段着色器为主线，从坐标、颜色和形状进入矩阵、噪声、纹理、图像处理、模拟、法线贴图与光线步进，可以边读边修改 GLSL 示例。',
		audience: '会一点 JavaScript 或 GLSL，想直观入门 Shader 并持续做视觉实验的人。',
		note: '中文章节尚未全部完成；遇到术语疑问时应对照英文原文。',
		reuse: '仅链接 · 未明确授权全文镜像'
	},
	{
		name: 'WebGL Fundamentals 中文版',
		url: 'https://webglfundamentals.org/webgl/lessons/zh_cn/',
		track: 'shader', languages: [ 'zh', 'en' ], price: 'free', level: 'beginner',
		topics: [ 'WebGL API', 'GLSL', '矩阵', '相机', '光照', '纹理', '性能' ],
		summary: '从 WebGL 基础 API 和 GLSL 入门，覆盖二维变换、三维相机、光照、纹理、帧缓冲、场景图、模型加载、后处理与性能优化。',
		audience: '有 JavaScript 基础，希望不依赖引擎理解渲染管线并写小型实验的人。',
		note: '中文翻译进度需要逐页确认；较新的章节可能仍以英文为主。',
		reuse: '仅链接 · 译文许可需单独确认'
	},
	{
		name: 'MDN WebGL 教程',
		url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API/Tutorial',
		track: 'shader', languages: [ 'zh', 'en' ], price: 'free', level: 'beginner',
		topics: [ 'Canvas', 'WebGL 上下文', 'Shader', '纹理', '光照', '浏览器 API' ],
		summary: '以浏览器 Canvas 为入口，讲解 WebGL 上下文、二维和三维绘制、着色器、纹理与光照，并提供最小可运行示例，适合作为 API 起点。',
		audience: '第一次接触浏览器图形 API，需要权威概念解释和短示例的前端开发者。',
		note: '偏 API 入门，复杂渲染算法需要搭配其他系统课程。',
		reuse: 'CC BY-SA · 转载须署名并保持许可'
	},
	{
		name: 'LearnOpenGL-CN',
		url: 'https://learnopengl-cn.github.io/',
		track: 'shader', languages: [ 'zh', 'en' ], price: 'free', level: 'intermediate',
		topics: [ 'OpenGL', 'GLSL', '光照', '阴影', 'PBR', 'HDR', '延迟渲染' ],
		summary: '系统讲解现代 OpenGL，从绘制管线、变换、光照和模型加载延伸到阴影、PBR、HDR、延迟渲染、实例化与高级效果。',
		audience: '有编程基础，准备系统掌握实时渲染工程和经典图形学技术的人。',
		note: '示例是 C++/OpenGL；概念可迁移，但 API 与 WebGL 不同。',
		reuse: '仅链接 · 中文译文许可需确认'
	},
	{
		name: 'Scratchapixel',
		url: 'https://www.scratchapixel.com/',
		track: 'shader', languages: [ 'en' ], price: 'free', level: 'advanced',
		topics: [ 'Ray Tracing', 'Rasterization', '几何', 'BRDF', '全局光照', '颜色管理' ],
		summary: '以亲手实现渲染器为主线，串起射线追踪、光栅化、相机、网格、着色、BRDF、纹理、加速结构、全局光照和路径追踪。',
		audience: '愿意补数学和物理基础，希望从实现层理解渲染原理的学习者。',
		note: '内容很深，建议按目录渐进学习，不要上来硬啃全部数学专题。',
		reuse: '仅链接 · 禁止未授权翻译和再分发'
	},
	{
		name: 'Shadertoy',
		url: 'https://www.shadertoy.com/',
		track: 'shader', languages: [ 'en' ], price: 'free', level: 'advanced',
		topics: [ 'GLSL', '程序化图形', 'SDF', 'Ray Marching', '后处理', '动画' ],
		summary: '在线 GLSL 实验场和作品社区，适合观察与创作程序化图形、SDF、光线步进、后处理、动画和声音反应效果。',
		audience: '已有 GLSL 基础，喜欢实验性视觉效果并能独立阅读别人代码的创作者。',
		note: '作品质量和许可各不相同，不要默认公开 Shader 可以直接商用。',
		reuse: '仅链接 · 逐作品核验许可'
	},
	{
		name: 'WebGPU Fundamentals 中文版',
		url: 'https://webgpufundamentals.org/webgpu/lessons/zh_cn/',
		track: 'webgpu', languages: [ 'zh', 'en' ], price: 'free', level: 'beginner',
		topics: [ 'WebGPU API', 'WGSL', 'Buffer', 'Texture', 'Compute Shader', '3D 数学' ],
		summary: '中文内容覆盖 WebGPU 基础、着色器数据、缓冲区、纹理、内存布局、渲染和计算，并配有可编辑示例，适合建立底层心智模型。',
		audience: '会 JavaScript、了解少量 WebGL，想用中文进入 WebGPU 的学习者。',
		note: '社区本地化持续更新，个别新章节仍可能保留英文。',
		reuse: 'BSD-3-Clause · 镜像须保留许可与署名'
	},
	{
		name: 'Three.js TSL 官方规范',
		url: 'https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language',
		track: 'webgpu', languages: [ 'en' ], price: 'free', level: 'advanced',
		topics: [ 'TSL', 'Node Graph', 'NodeMaterial', 'WGSL', 'GLSL', 'Compute' ],
		summary: 'Three.js 官方 TSL 规范，系统解释 Node 图、类型转换、uniform、纹理、材质、渲染管线、后期处理和计算节点。',
		audience: '已会 Three.js，准备编写节点材质并理解 TSL 生成过程的中高级开发者。',
		note: 'TSL 仍在快速演进，升级 Three.js 时要同步核对 API 和迁移记录。',
		reuse: '仅链接 · Wiki 未单独声明镜像条款'
	},
	{
		name: 'Learn WebGPU',
		url: 'https://eliemichel.github.io/LearnWebGPU/',
		track: 'webgpu', languages: [ 'en' ], price: 'free', level: 'advanced',
		topics: [ 'C++', '原生 WebGPU', '设备', '交换链', '3D 渲染', 'Compute' ],
		summary: '面向 C++ 原生应用的逐章教程，从窗口、设备、交换链和缓冲区进入 3D、计算与高级技术，代码贴近 WebGPU 底层。',
		audience: '熟悉 C++，希望理解 GPU 资源生命周期和原生 WebGPU 实现的图形程序员。',
		note: '不是 JavaScript 入门教程；项目仍在持续建设中。',
		reuse: '仅链接 · 内容许可未统一核实'
	},
	{
		name: 'Google WebGPU Codelab',
		url: 'https://codelabs.developers.google.com/your-first-webgpu-app',
		track: 'webgpu', languages: [ 'en' ], price: 'free', level: 'beginner',
		topics: [ 'JavaScript', 'Canvas', 'GPUAdapter', 'WGSL', 'Compute Shader', '生命游戏' ],
		summary: '用 Conway 生命游戏串起适配器、设备、Canvas、顶点/片段着色器和计算着色器，步骤短、检查点清楚。',
		audience: '会 HTML、JavaScript 和 DevTools，准备写第一个浏览器 WebGPU 项目的人。',
		note: '需要支持 WebGPU 的现代浏览器；示例仓库提供分阶段代码。',
		reuse: 'Apache-2.0 · 镜像须保留版权和 NOTICE'
	},
	{
		name: 'Three.js Journey：WebGPU & TSL',
		url: 'https://threejs-journey.com/lessons/webgpu-tsl/introduction-to-webgpu-tsl',
		track: 'webgpu', languages: [ 'en' ], price: 'paid', level: 'intermediate',
		topics: [ 'Three.js WebGPU', 'TSL', 'NodeMaterial', '后处理', '实例化', '粒子' ],
		summary: '项目驱动的付费视频课，从 WebGPU 与 TSL 基础、节点材质、纹理和函数，推进到后处理、实例化、粒子与完整视觉项目。',
		audience: '已有 Three.js 和 Shader 基础，希望用 WebGPU/TSL 制作作品集项目的人。',
		note: '商业课程，价格会变化；首课和部分内容可预览。',
		reuse: '仅链接 · 商业版权内容'
	},
	{
		name: 'React Three Fiber 官方文档',
		url: 'https://r3f.docs.pmnd.rs/getting-started/introduction',
		track: 'ecosystem', languages: [ 'en' ], price: 'free', level: 'intermediate',
		topics: [ 'React', 'JSX 场景', 'Canvas', 'Hooks', '事件', '模型', 'WebGPU' ],
		summary: '讲解 React 声明式场景、Canvas、hooks、事件和模型加载，也包含异步 WebGPURenderer 与 TSL 集成方式。',
		audience: '熟悉 React 与 Three.js，想用组件和 hooks 构建可维护 3D 应用的工程师。',
		note: 'R3F 与 Three.js 版本必须匹配；WebGPU 支持仍在演进。',
		reuse: '仅链接 · 代码 MIT，文档镜像许可未单独核实'
	}
];
