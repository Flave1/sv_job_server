import mongoose from "mongoose";

class DbConfig {
    private url

 constructor() {
    this.url = "mongodb+srv://flaveconsole:Flavetechs123456@dev-aws-smp.az5vsvr.mongodb.net/?retryWrites=true&w=majority";
 }
  public async connect(): Promise<void> {
    mongoose.connect(this.url);
    mongoose.connection.on("error", (error: Error) => console.log(error));
  }
}

export default new DbConfig();
