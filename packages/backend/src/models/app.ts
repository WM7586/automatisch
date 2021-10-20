import fs from 'fs';
import appInfoConverter from '../helpers/app-info-converter';

class App {
  static folderPath = __dirname + '/../apps';
  static list = fs.readdirSync(this.folderPath);

  static findAll(name?: string): object[] {
    if(!name) return this.list.map((name) => this.findOneByName(name));

    return this.list
      .filter((app) => app.includes(name.toLowerCase()))
      .map((name) => this.findOneByName(name));
  }

  static findOneByName(name: string): object {
    const rawAppData = fs.readFileSync(this.folderPath + `/${name}/info.json`, 'utf-8');
    return appInfoConverter(rawAppData);
  }

  static findOneByKey(key: string): object {
    const rawAppData = fs.readFileSync(this.folderPath + `/${key}/info.json`, 'utf-8');
    return appInfoConverter(rawAppData);
  }
}

export default App;
