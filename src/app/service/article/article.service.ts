import {Injectable} from '@angular/core';
import {Article} from "../../interface/article";


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() {
  }

  getArticleForHeroSlides(): Article[] {

    return [
      {
        id: 1,
        title: 'Sandstorm',
        caption: '1.  Well-meaning noobs can give advice capable of bringing about an armageddon with the potential of destroying the Earth multiple times over.',
        image: 'https://i.vimeocdn.com/video/590811708.jpg'
      },
      {
        id: 2,
        title: 'Sky',
        caption: '2.  In my opinion, you can joke about anything. A lot of times people joke to make tragic events feel more tolerable.',
        image: 'https://getwallpapers.com/wallpaper/full/4/6/2/629447.jpg'
      },
      {
        id: 3,
        title: 'Storm',
        caption: '3.  In Flanders between 10 and 20 percent of professors and lecturers teaching in English did not attain the required language level.',
        image: 'https://eskipaper.com/images/storm-9.jpg'
      },
      {
        id: 4,
        title: 'Iceberg',
        caption: '4.  Tom was so drunk that he spent the night in a ditch because he could not find his way home anymore.',
        image: 'https://wallpaperset.com/w/full/c/3/7/545263.jpg'
      },
      {
        id: 5,
        title: 'Mountain',
        caption: '5.  But that would be extremely strained and suspicious as in fifteen years of service Gregor had never once yet been ill.',
        image: 'https://hddesktopwallpapers.in/wp-content/uploads/2015/08/scenery-summer-mountain.jpg'
      },
      {
        id: 6,
        title: 'Lake',
        caption: '6.  Parents are being overwhelmed by the back to school technology requirements for their children, and many are buying the wrong devices.',
        image: 'https://www.englishcottagevacation.com/wp-content/uploads/2020/03/english-cottage-vacation-lake-district.jpeg.jpeg'
      },
      {
        id: 7,
        title: 'City',
        caption: '7.  When the singer appeared on stage, the audience gave him the Bronx cheer, because he dumped his wife for another woman.',
        image: 'https://images.wallpaperscraft.com/image/city_skyline_buildings_162282_1920x1080.jpg'
      },
      {
        id: 8,
        title: 'Building',
        caption: '8.  A young girl was riding upon the horse, with a shining red cap on her head, and pistols in her belt.',
        image: 'https://1.bp.blogspot.com/-0ohKcl0qM04/ToezIRUeh1I/AAAAAAAAAFI/TJb0-WmYra0/s1600/chrysler-building-1-765009.jpg'
      },
      {
        id: 9,
        title: 'Cloud',
        caption: '9.  When I was playing video games in the living room, my mom asked me if I would go shopping with her.',
        image: 'https://getwallpapers.com/wallpaper/full/0/b/1/1401232-free-download-mushroom-cloud-wallpaper-1920x1200-for-iphone-6.jpg'
      },
      {
        id: 10,
        title: 'Field',
        caption: '10.  When the singer appeared on stage, the audience gave him the Bronx cheer, because he dumped his wife for another woman.',
        image: 'https://jooinn.com/images/green-paddy-field-5.png'
      },
      {
        id: 11,
        title: 'River',
        caption: '11.  She is a highly influential manga artist, and many people credit her work with boosting the international popularity of Japanese comics.',
        image: 'https://hddesktopwallpapers.in/wp-content/uploads/2015/09/river-wallpaper-magnificent.jpg'
      },
      {
        id: 12,
        title: 'Rain',
        caption: '12.  I haven\'t read both his novels, but judging from the one I have read, he seems to be a promising writer.',
        image: 'https://i2.wp.com/www.researchstash.com/wp-content/uploads/2018/07/Distribution-of-Monsoon-Rainfall-Connected-To-Global-Sea-Surface-Temperatures.jpg'
      },
    ]
      ;
  }
}
