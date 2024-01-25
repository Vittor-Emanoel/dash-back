export abstract class IMail {
  abstract send(subject: string, to: string): Promise<any>;
}
