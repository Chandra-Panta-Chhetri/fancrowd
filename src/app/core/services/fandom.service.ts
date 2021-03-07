import { Injectable } from '@angular/core';
import Fandom from 'src/app/shared/models/fandom';
import { HttpClient, HttpParams } from '@angular/common/http';
import Category from 'src/app/shared/models/category';

@Injectable({
  providedIn: 'root',
})
export class FandomService {
    category: Category[] = [
        {
            id: 1,
            name: "Movies",
            backgroundUrl: 'https://i.pinimg.com/originals/51/c2/2e/51c22e9f59f506d283c1b07fa92e9a93.jpg',
        }, 
        {
            id: 2,
            name: "Books",
            backgroundUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80',
        },  {
            id: 3,
            name: "Shows",
            backgroundUrl: 'https://www.canvasandwall.co.za/wp-content/uploads/2020/04/TV-Background-3D-wallpaper.jpg',
        }, 
        {
            id: 4,
            name: "Anime",
            backgroundUrl: 'https://wallpaper-house.com/data/out/7/wallpaper2you_191367.jpg',
        },
        {
            id: 5,
            name: "Games",
            backgroundUrl: 'https://wallpaperaccess.com/full/242347.jpg',
        },
        {
            id: 6,
            name: "Sports",
            backgroundUrl: 'https://wallpaperaccess.com/full/552032.jpg',
        }, 
        {
            id: 7,
            name: "Technology",
            backgroundUrl: 'https://wallpaperaccess.com/full/249743.png',
        }
    ];

    fandoms: Fandom[] = [
    {
        id: 1,
        category: this.category[0].name,
        name: "Avengers",
        backgroundUrl: 'https://wallpaperaccess.com/full/311206.jpg'
    },
    {
        id: 2,
        category: this.category[0].name,
        name: "Harry Potter",
        backgroundUrl: 'https://wallpapercave.com/wp/wp2763337.jpg'
    },
    {
        id: 3,
        category: this.category[0].name,
        name: "Avengers: Age of Ultron",
        backgroundUrl: 'https://wallpaperaccess.com/full/1117133.jpg'
    },
    {
        id: 4,
        category: this.category[0].name,
        name: "Maze Runner: The Death Cure",
        backgroundUrl: 'https://images3.alphacoders.com/913/thumb-1920-913996.jpg'
    },
    {
        id: 5,
        category: this.category[0].name,
        name: "Journey to the Mysterious Island",
        backgroundUrl: 'https://images2.alphacoders.com/805/805700.jpg'
    },
    {
        id: 6,
        category: this.category[0].name,
        name: "All",
        backgroundUrl: 'https://i.pinimg.com/originals/51/c2/2e/51c22e9f59f506d283c1b07fa92e9a93.jpg'
    },
    {
        id: 7,
        category: this.category[1].name,
        name: "Divergent Series",
        backgroundUrl: 'https://wallpapercave.com/wp/wp1826730.jpg'
    },
    {
        id: 8,
        category: this.category[1].name,
        name: "The Chronicles of Narnia Series",
        backgroundUrl: 'https://wallpaperaccess.com/full/1715646.jpg'
    },
    {
        id: 9,
        category: this.category[1].name,
        name: "Harry Potter Series",
        backgroundUrl: 'https://i.pinimg.com/originals/9e/79/90/9e799033d6cc8983b902cb9a7c41b74c.jpg'
    },
    {
        id: 10,
        category: this.category[1].name,
        name: "Percy Jackson Series",
        backgroundUrl: 'https://wallpapercave.com/wp/wp2961879.jpg'
    },
    {
        id: 11,
        category: this.category[1].name,
        name: "All",
        backgroundUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80'
    },
    {
        id: 12,
        category: this.category[2].name,
        name: "Game of Thrones",
        backgroundUrl: 'https://cdn.wallpapersafari.com/26/33/Fbx3ci.jpg'
    },
    {
        id: 13,
        category: this.category[2].name,
        name: "The Queen's Gambit",
        backgroundUrl: 'https://wallpaperaccess.com/full/4722410.jpg'
    },
    {
        id: 14,
        category: this.category[2].name,
        name: "The Big Bang Theory",
        backgroundUrl: 'https://wallpapercave.com/wp/Htvtugs.jpg'
    },
    {
        id: 15,
        category: this.category[2].name,
        name: "All",
        backgroundUrl: 'https://www.canvasandwall.co.za/wp-content/uploads/2020/04/TV-Background-3D-wallpaper.jpg'
    },
    {
        id: 16,
        category: this.category[3].name,
        name: "Yu-Gi-Oh!",
        backgroundUrl: 'https://i.pinimg.com/originals/d1/7a/d8/d17ad80144ef56adbf58a17a686ea619.jpg'
    },
    {
        id: 17,
        category: this.category[3].name,
        name: "One Punch Man",
        backgroundUrl: 'https://cdn.wallpapersafari.com/51/10/9A6JeS.jpg'
    },
    {
        id: 18,
        category: this.category[3].name,
        name: "Beyblade",
        backgroundUrl: 'https://i.pinimg.com/originals/2c/ae/46/2cae460058ec18fa42d5a3c07589b781.jpg'
    },
    {
        id: 19,
        category: this.category[3].name,
        name: "All",
        backgroundUrl: 'https://wallpaper-house.com/data/out/7/wallpaper2you_191367.jpg'
    },
    {
        id: 20,
        category: this.category[4].name,
        name: "Call of Duty",
        backgroundUrl: 'https://i.pinimg.com/originals/c4/88/a5/c488a5045bf7ac2d08b8bd9342cecf92.jpg'
    },
    {
        id: 21,
        category: this.category[4].name,
        name: "God of War",
        backgroundUrl: 'https://wallpapercave.com/wp/T4xxWSN.jpg'
    },
    {
        id: 22,
        category: this.category[4].name,
        name: "Assassin's Creed",
        backgroundUrl: 'https://i.pinimg.com/originals/80/d9/89/80d98924b54c6ff8b8438cc30ea1e694.jpg'
    },
    {
        id: 23,
        category: this.category[4].name,
        name: "NBA 2020",
        backgroundUrl: 'https://wallpaperaccess.com/full/103114.jpg'
    },
    {
        id: 24,
        category: this.category[4].name,
        name: "All",
        backgroundUrl: 'https://wallpaperaccess.com/full/242347.jpg'
    },
    {
        id: 25,
        category: this.category[5].name,
        name: "Basketball",
        backgroundUrl: 'https://i.pinimg.com/originals/dc/eb/80/dceb80db40569f060a1197d7f8c58916.jpg'
    },
    {
        id: 26,
        category: this.category[5].name,
        name: "Soccer",
        backgroundUrl: 'https://wallpapercave.com/wp/4dqP3rn.jpg'
    },
    {
        id: 27,
        category: this.category[5].name,
        name: "Golf",
        backgroundUrl: 'https://cdn.hipwallpaper.com/i/91/94/rFjELC.jpg'
    },
    {
        id: 28,
        category: this.category[5].name,
        name: "Cricket",
        backgroundUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y3JpY2tldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
    },
    {
        id: 29,
        category: this.category[5].name,
        name: "All",
        backgroundUrl: 'https://wallpaperaccess.com/full/552032.jpg'
    },
    {
        id: 30,
        category: this.category[6].name,
        name: "All",
        backgroundUrl: 'https://wallpaperaccess.com/full/249743.png'
    }
  ];

  constructor(private http: HttpClient) {}

  sortFunction(a: any, b: any) : number{  
    var dateA = a.name;
    var dateB = b.name;
    return dateA > dateB ? 1 : -1;  
  }

  addCategory(category: Category): void {
    // Add fandom to server, code below requires server call

    let exists = false;
    let fandom = {
        id: 1000,
        category: category.name,
        name: "All",
        backgroundUrl: category.backgroundUrl
    }

    this.category.forEach((x) => {
        if (x.name.toLowerCase() === category.name.toLowerCase()){
            exists = true;
        }
    })

    if (!exists){
        this.category.push(category);
        this.fandoms.push(fandom);
    }
  }

  getCategories(): Category[] {
    // Get categories from server, code below requires server call

    return this.category.sort((a,b) => this.sortFunction(a,b));
  }

  addFandom(fandom: Fandom): void {
    // Add fandom to server, code below requires server call
    let exists = false;
    let fandoms = this.getFandomsByCategories(fandom.category);
    console.log("Fandoms", fandoms);
    fandoms.forEach((x) => {
        if (x.name.toLowerCase() === fandom.name.toLowerCase()){
            exists = true;
        }
    });

    if (!exists){
        this.fandoms.push(fandom);
    }
  }

  getFandoms(): Fandom[] {
    // Get fandoms from server, code below requires server call

    return this.fandoms.sort((a,b) => this.sortFunction(a,b));
  }

  getFandomsByCategories(category: string | undefined): Fandom[] {
    // Get fandoms from server, code below requires server call

    let fandomsByCategory: Fandom[] = [];
    this.fandoms.forEach((fandom: Fandom) => {
        if (category !== undefined && fandom.category === category){
            fandomsByCategory.push(fandom);
        }
    });

    return fandomsByCategory.sort((a,b) => this.sortFunction(a,b));
  }

  deleteFandom(index: number): boolean {
    // Delete fandom from server, code below requires server call
    
    if (index >= 0) {
      this.fandoms.splice(index, 1);
      return true;
    }

    return false;
  }
}
