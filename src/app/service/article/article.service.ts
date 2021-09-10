import {Injectable} from '@angular/core';
import {Article} from "../../interface/article";
import {ShowCaseData} from "../../interface/show-case-data";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  getArticleForHeroSlides(): Article[] {
    return [
      {
        articleId: 1,
        title: 'Sandstorm',
        caption: '1.  Well-meaning noobs can give advice capable of bringing about an armageddon with the potential of destroying the Earth multiple times over.',
        image: 'https://i.vimeocdn.com/video/590811708.jpg'
      },
      {
        articleId: 2,
        title: 'Sky',
        caption: '2.  In my opinion, you can joke about anything. A lot of times people joke to make tragic events feel more tolerable.',
        image: 'https://getwallpapers.com/wallpaper/full/4/6/2/629447.jpg'
      },
      {
        articleId: 3,
        title: 'Storm',
        caption: '3.  In Flanders between 10 and 20 percent of professors and lecturers teaching in English did not attain the required language level.',
        image: 'https://eskipaper.com/images/storm-9.jpg'
      },
      {
        articleId: 4,
        title: 'Iceberg',
        caption: '4.  Tom was so drunk that he spent the night in a ditch because he could not find his way home anymore.',
        image: 'https://wallpaperset.com/w/full/c/3/7/545263.jpg'
      },
      {
        articleId: 5,
        title: 'Mountain',
        caption: '5.  But that would be extremely strained and suspicious as in fifteen years of service Gregor had never once yet been ill.',
        image: 'https://hddesktopwallpapers.in/wp-content/uploads/2015/08/scenery-summer-mountain.jpg'
      },
      {
        articleId: 6,
        title: 'Lake',
        caption: '6.  Parents are being overwhelmed by the back to school technology requirements for their children, and many are buying the wrong devices.',
        image: 'https://www.englishcottagevacation.com/wp-content/uploads/2020/03/english-cottage-vacation-lake-district.jpeg.jpeg'
      },
      {
        articleId: 7,
        title: 'City',
        caption: '7.  When the singer appeared on stage, the audience gave him the Bronx cheer, because he dumped his wife for another woman.',
        image: 'https://images.wallpaperscraft.com/image/city_skyline_buildings_162282_1920x1080.jpg'
      },
      {
        articleId: 8,
        title: 'Building',
        caption: '8.  A young girl was riding upon the horse, with a shining red cap on her head, and pistols in her belt.',
        image: 'https://1.bp.blogspot.com/-0ohKcl0qM04/ToezIRUeh1I/AAAAAAAAAFI/TJb0-WmYra0/s1600/chrysler-building-1-765009.jpg'
      },
      {
        articleId: 9,
        title: 'Cloud',
        caption: '9.  When I was playing video games in the living room, my mom asked me if I would go shopping with her.',
        image: 'https://getwallpapers.com/wallpaper/full/0/b/1/1401232-free-download-mushroom-cloud-wallpaper-1920x1200-for-iphone-6.jpg'
      },
      {
        articleId: 10,
        title: 'Field',
        caption: '10.  When the singer appeared on stage, the audience gave him the Bronx cheer, because he dumped his wife for another woman.',
        image: 'https://jooinn.com/images/green-paddy-field-5.png'
      },
      {
        articleId: 11,
        title: 'River',
        caption: '11.  She is a highly influential manga artist, and many people credit her work with boosting the international popularity of Japanese comics.',
        image: 'https://hddesktopwallpapers.in/wp-content/uploads/2015/09/river-wallpaper-magnificent.jpg'
      },
      {
        articleId: 12,
        title: 'Rain',
        caption: '12.  I haven\'t read both his novels, but judging from the one I have read, he seems to be a promising writer.',
        image: 'https://i2.wp.com/www.researchstash.com/wp-content/uploads/2018/07/Distribution-of-Monsoon-Rainfall-Connected-To-Global-Sea-Surface-Temperatures.jpg'
      },
    ];
  }

  getArticleForShowCase(): ShowCaseData[] {
    return [
      {
        row: 0,
        content: [
          {
            id: 0,
            articleId: 151,
            title: 'Italy in the sunset',
            image: 'https://i.pinimg.com/736x/f2/d2/50/f2d25021a59529e1abe165a111f1430f--italy-trip-italy-travel.jpg',
            createdAt: new Date("2018-02-02"),
            decorator: {
              marginTop: 100,
              maxWidth: 480,
              dots: true,
              dotsAlign: 'left',
              text: 'Quality',
              textAlign: 'left',
              textPosition: 35
            },
          },
          {
            id: 1,
            articleId: 555,
            title: 'Mountain Landscape',
            image: 'https://www.zastavki.com/pictures/originals/2013/Nature___Mountains___Mountain_landscape_with_a_road_042857_.jpg',
            createdAt: new Date("2018-02-02"),
            decorator: {marginTop: 230, maxWidth: 480, dots: true, dotsAlign: 'right'},
          },
        ],
        style: 'justify-content-between',
      },
      {
        row: 1,
        content: [
          {
            id: 0,
            articleId: 933,
            title: 'Foggy lake',
            image: 'https://images.hdqwalls.com/wallpapers/fog-over-lake-5k-fn.jpg',
            createdAt: new Date("2020-11-02"),
            decorator: {
              marginTop: 100,
              maxWidth: 1080,
              dots: true,
              text: 'Innovation',
              textAlign: 'right',
              textPosition: 30
            },
          },
        ],
        style: '',
      },
      {
        row: 2,
        content: [
          {
            id: 0,
            articleId: 163,
            title: 'Clouds in the sky',
            image: 'https://strangesounds.org/wp-content/uploads/2017/02/mammatus-clouds.jpg',
            createdAt: new Date("2020-12-01"),
            decorator: {marginTop: -220, maxWidth: 640, dots: true, dotsAlign: 'right'},
          },
        ],
        style: 'justify-content-end',
      },
      {
        row: 3,
        content: [
          {
            id: 0,
            articleId: 321,
            title: 'Over the canyon',
            image: 'https://ssl.c.photoshelter.com/img-get/I000044ofjmiWhTQ/s/1200/I000044ofjmiWhTQ.jpg',
            createdAt: new Date("2021-01-12"),
            decorator: {
              marginTop: -250,
              maxWidth: 360,
              text: 'Passion',
              dots: true,
              textAlign: 'left',
              textPosition: 1
            },
          },
        ],
        style: '',
      },
      {
        row: 4,
        content: [
          {
            id: 0,
            articleId: 343,
            title: 'Mirror lake',
            image: 'https://c8.alamy.com/comp/CWW666/alberta-canada-mirror-lake-in-banff-national-park-CWW666.jpg',
            createdAt: new Date("2021-02-14"),
            decorator: {marginTop: -250, maxWidth: 360, dots: false},
          }
        ],
        style: 'justify-content-center',
      },
      {
        row: 5,
        content: [
          {
            id: 0,
            articleId: 352,
            title: 'Post office',
            image: 'https://media.istockphoto.com/photos/outside-general-post-office-sydney-martin-place-picture-id1162272879',
            createdAt: new Date("2021-03-25"),
            decorator: {
              marginTop: -500,
              maxWidth: 360,
              dots: true,
              dotsAlign: 'right',
              text: 'Future',
              textAlign: 'right',
              textPosition: 20
            },
          }
        ],
        style: 'justify-content-end',
      },
    ];
  }
}
