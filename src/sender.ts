import { create, Whatsapp, Message, SocketState } from 'venom-bot';

class Sender {
  private client: Whatsapp;

  constructor() {
    this.initialize();
  }

  private initialize() {
    const qrcode = (base64Qrimg: string) => {}

    const status = (statusSession: string) => {}

    const start = (client: Whatsapp) => {
      this.client = client;
    }

    create("ws-sender-dev", qrcode, status)
      .then((client) => start(client))
      .catch((error) => console.log(error));
  }

  async sendText(to: string, body: string) {
    // parameter to must be of type //5588997660734@c.us
    this.client.sendText(to, body);
  }
}

export default Sender;
