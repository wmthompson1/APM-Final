import {Developer} from './developer';

export class DeveloperCollection {
  private developers: Developer[] = [
    {
      "id": 211,
      "githubHandle": "something1",
      "avatarUrl": "",
      "realName": "John1 Smith1",
      "email": "sample1@sample.com",
      "technology": "C#",
      "popular": true
    
          },
          
          {
            "id": 212,
            "githubHandle": "something2",
            "avatarUrl": "",
            "realName": "John2 Smith2",
            "email": "sample1@sample.com",
            "technology": "C#",
            "popular": true
          
          },
          
          
          
          {
          "id": 213,
          "githubHandle": "something3",
          "avatarUrl": "",
          "realName": "John3 Smith3",
          "email": "sample3@sample.com",
          "technology": "C#",
          "popular": true
    
          }
    

  ];

  getUserByGitHubHandle(username: string) {
    return this.developers.filter(u => u.githubHandle === username).pop();
  }

  getUserById(id: number) {
    return this.developers.filter(u => u.id === id).pop();
  }

  addDeveloper(dev: Developer) {
    this.developers.push(dev);
  }

  getAll() {
    return this.developers;
  }
}
