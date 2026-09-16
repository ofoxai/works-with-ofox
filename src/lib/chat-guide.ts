export const chatGuides = {
  "en": {
    "title": "Choose a model, then try your own task",
    "body": "Ofox Chat brings multiple models into one chat interface. Start with a short, non-sensitive task and check the result before using it in your work. Available models and account requirements are shown in the application.",
    "steps": [
      "Open Ofox Chat and follow the account prompts.",
      "Choose an available model and describe the task, desired format and constraints.",
      "Check the response for accuracy; refine the prompt or try another available model."
    ],
    "exampleTitle": "Example prompt to try",
    "example": "Rewrite this paragraph as a concise customer email. Preserve every date and number, and do not add claims. Paragraph: [paste your text].",
    "exampleNote": "This is a suggested input, not a published test result. Review the output yourself.",
    "limitsTitle": "Before you start",
    "limits": "Model availability and charges can vary. Check the account and model information in the app before use. Do not assume that every model in the API catalog, file upload, browsing or image generation is available in Chat.",
    "next": "Find a model for your task",
    "writing": "Writing models",
    "translation": "Translation models",
    "finder": "Model finder"
  },
  "zh": {
    "title": "先选择模型，再用自己的任务验证",
    "body": "Ofox Chat 将多个模型放在同一个聊天界面中。建议先用一段不含敏感信息的小任务试用，核对输出后再用于工作。可用模型和账户要求以应用内展示为准。",
    "steps": [
      "打开 Ofox Chat，按页面提示完成账户操作。",
      "选择可用模型，说明任务、期望格式和限制条件。",
      "核对回答是否准确，再调整提示词或尝试其他可用模型。"
    ],
    "exampleTitle": "可以尝试的提示词",
    "example": "请把以下段落改写为简洁的客户邮件。保留所有日期和数字，不添加未经提供的事实。原文：[粘贴你的文本]。",
    "exampleNote": "这是输入示例，不是已发布的实测结果；请自行核对生成内容。",
    "limitsTitle": "使用前确认",
    "limits": "模型可用性与费用可能不同，使用前请查看应用内的账户和模型信息。不要默认 API 目录中的全部模型、文件上传、联网或图像生成都能在 Chat 中使用。",
    "next": "按任务选择模型",
    "writing": "写作模型选型",
    "translation": "翻译模型选型",
    "finder": "模型选型工具"
  }
} as const;
