class ChatbotNode {
  description = {
    displayName: 'Chatbot Node',
    name: 'chatbotNode',
    group: ['transform'],
    version: 1,
    description: 'Sends messages to chatbot',
    defaults: {
      name: 'Chatbot Node',
      color: '#00aaff'
    },
    inputs: ['main'],
    outputs: ['main'],
    properties: [
      {
        displayName: 'Message',
        name: 'message',
        type: 'string',
        default: '',
        description: 'Message to send to the chatbot'
      }
    ]
  };

  async execute() {
    const items = this.getInputData();
    const returnData = [];

    for (let i = 0; i < items.length; i++) {
      const message = this.getNodeParameter('message', i);
      returnData.push({ json: { message } });
    }

    return this.prepareOutputData(returnData);
  }
}

// ✅ EXPORT ĐÚNG
module.exports = {
  default: ChatbotNode
};

