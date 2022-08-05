// 主程式
let page = 1;  //頁面，0：地圖，1：遊戲入口頁，2：背景故事1，3：背景故事2，4：遊戲玩法
let positionX,positionY;  //角色位置
let back,character,play; //圖片
const imageWidth = 5000; //背景寬度
const imageHeight = 5000; //背景高度
const step = 5; //每步的距離
let map_small = 0; //小地圖是否開啟
let i = 0;  //計算地圖次數，播放行走動畫
let music_back = 0;  //判斷背景音樂是否開啟
let music_special = 0;  //判斷音效是否開啟
let color_from_map;

//搶孤
let grab_word = ['頭城搶孤活動和早期吳沙開墾\n蘭陽平原有關，漢人族群離鄉\n背井，渡海來台灣開墾蘭陽平\n原，頭城就是開墾的第一個據\n點。在開拓過程中，歷經天災\n、疾病、人禍而喪命，無法受\n子孫供奉的孤魂無所歸依，因\n此，在農曆7月29，也就是\n「鬼門關」之夜，舉行搶孤\n儀式，以表對先民的追念。','搶孤是「以人象徵鬼魂」的方\n式，由搶孤者相競攀爬孤柱，\n孤柱上會塗滿牛油，選手以麻\n繩爬上孤柱頂端後，以倒掛金\n鉤的方式翻上倒塌棚，第一個\n上倒塌棚者，要將糕餅往下倒\n，供眾人搶拾，接著繼續爬上\n孤棧，拿取祭品與順風旗，最\n先搶到順風旗者勝利。','開始遊戲後，以鍵盤A和D來\n控制搶孤者向上爬的速度，A\n代表左手，D代表右手，A、D\n按得越快，向上爬的速度也越\n快。當搶孤者爬上孤柱頂端、\n倒塌棚或是搶到順風旗，都會\n有題目需要回答，答對一題\n100分，答錯0分，遊戲結束後\n，會顯示得分。']; //搶孤文字
let grab_word_num = 0; //搶孤文字編號
let grabX = 350; //搶孤角色位子
let grabY = 520;
let grab_r = 0;
let grab_l = 0;
let grab_score = 0; //搶孤問答分數
let grab_page = 0;  //搶孤頁面
let grab_music = 0;  //搶孤音樂
let grab_Question = ["請問頭城搶孤舉行的時間是?","孤棚由下而上的順序是?","最先做到什麼事情的團隊獲勝?"];  //搶孤問答題目
let grab_Answer = ["D","B","C"];  //搶孤問答答案
let grab_Choice = [["A:農曆4/4","B:農曆7/1","C:農曆7/15","D:農曆7/29"],["A:孤棧->倒塌棚->孤柱","B:孤柱->倒塌棚->孤棧","C:倒塌棚->孤柱->孤棧","D:以上皆非"],["A:最先爬上孤柱","B:最先翻上倒塌棚","C:最先搶到順風旗","D:各有一個優勝者"]];  //搶孤問答選項
let grab_number = 0;  //搶孤問題編號
let grab_error = 0;
//歌仔戲
let opera_page = 0;  //歌仔戲頁面
let img1,opera_character;  //歌仔戲背景、角色圖
let opera_positionX,opera_positionY;  //歌仔戲角色位子
let characterHeight,characterWidth;  //歌仔戲角色大小
let opera_score;  //歌仔戲分數
let opera_question_number = 0;  //歌仔戲問題編號
let opera_music = 0;  //歌仔戲音樂
let opera_question = ["請問歌仔戲發源於哪一處?","當時歌仔戲所傳唱內容為何?","早期歌仔戲於室外表演，觀眾坐在舞台的哪裡?","早期歌仔戲表演，角色初登場時，需做\n　　　下列何件事?"];  //歌仔戲問答題目
let opera_answer = ["B","C","D","B"];  //歌仔戲問答答案
let opera_choice = [["A:宜蘭市金六結","B:員山鄉結頭份","C:礁溪鄉四城","D:羅東鎮歪子歪"],["A:民間故事","B:文學故事","C:日常生活情節","D:歷史事件"],["A:前方","B:後方","C:左右","D:四周"],["A:展扇花","B:走四大角","C: 跳鍾馗","D:桃花過渡"]];  //歌仔戲問答選項
let widthSize,heightSize;  //歌仔戲頁面大小
//旗魚
let fish_page = 0; //旗魚頁面
const {Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;
let fish_question_number = 0;  //旗魚問答編號
let fish_question =  ["請問旗魚俗稱是甚麼?","請問最開始的鏢旗魚是從\n哪個時代傳入的？","請問通常在前段的有誰呢？","請問眼力好了通上是位於哪一\n個位置?"];  //旗魚問答題目
let fish_answer = ["A","A","D","B"];  //旗魚問答答案
let fish_choice = [["A:丁挽","B:丁免","C:甲挽","D:甲免"],["A:日治時期","B:清朝","C:荷治時期","D:西班牙時期"],["A:右鏢手","B:左鏢手","C:鏢手助理","D:以上皆是"],["A:前段","B:中段","C:後段","D:以上皆非"]];  //旗魚問答選項
let fish_music = 0;
let fish_score = 0;
let ground;
let target_ground;
let gun;
let world,engine;
let mConstraint;
let slingshot;
let fish;
let score= 0, a = 0;
let timer = 30;  //旗魚遊戲時間



function preload(){
  back = loadImage('assets/map_color.png'); //地圖
  entry_img = loadImage('assets/entry_page.jpg');  //入口頁
  story1 = loadImage('assets/story1_0.jpeg'); //背景故事1
  story2 = loadImage('assets/story2_0.jpeg'); //背景故事2
  story3 = loadImage('assets/story4.png'); //遊戲玩法
  exit_img = loadImage('assets/story_22.jpg'); //離開故事
  character_front = loadImage('assets/character_front.png');  //主角(前)
  character_back = loadImage('assets/character_back.png'); //主角(後)
  character_left1 = loadImage('assets/character_left1.png'); //主角(左1)
  character_left2 = loadImage('assets/character_left2.png'); //主角(左2)
  character_right1 = loadImage('assets/character_right1.png'); //主角(右)
  character_right2 = loadImage('assets/character_right2.png'); //主角(右2)
  play = loadImage('images/mouse2.png');
  small_map = loadImage('assets/small_map.png'); //小地圖圖示
  bgm = loadSound('assets/bgm-1.mp3');  //地圖背景音樂
  music = loadImage('assets/volume2.png'); //背景音樂圖片
  mute = loadImage('assets/mute2.png'); //靜音圖片
  volume_on = loadImage('assets/volume_on.png'); //音效圖片
  volume_off = loadImage('assets/volume_off.png'); // 音效靜音圖片
  grab_icon = loadImage('assets/grab_button.png');  //搶孤按鈕
  opera_icon = loadImage('assets/opera_button2.png');  //歌仔戲按鈕
  setting_icon = loadImage('assets/setting_button.png'); //設定按鈕
  fish_icon = loadImage('assets/fish_button.png');  //旗魚按鈕
  exit_icon = loadImage('assets/exit.png'); //離開按鈕
  img1 = loadImage('images/aaa.jfif');  // 歌仔戲舞台
  opera_info1 = loadImage('assets/opera_1.jpg'); // 歌仔戲介紹
  opera_info2 = loadImage('assets/opera_2.jpg'); //歌仔戲玩法
  side = loadImage('images/side.png');  //歌仔戲角色1
  front = loadImage('images/c.png');   //歌仔戲角色2
  dot = loadImage('images/dot.png');   //歌仔戲定位點
  next_button = loadImage('assets/next-1.png'); //下頁按鈕
  back_button = loadImage('assets/back.png'); //上頁按鈕
  play_button = loadImage('assets/play.png'); //開始遊戲按鈕
  exit_button = loadImage('assets/exit_icon.png');
  map_pic = loadImage('images/map.png');  //回地圖按鈕
  opera_qa_back = loadImage('images/opera_qa_back.jpg'); //歌仔戲問答背景
  opera_qa1 = loadImage('assets/opera_qa1.jpeg');
  opera_qa2 = loadImage('assets/opera_qa2.jpeg');
  opera_qa3 = loadImage('assets/opera_qa3.jpeg');
  opera_qa4 = loadImage('assets/opera_qa4.jpeg');
  opera_bgm = loadSound('images/opera_bgm.mp3');  //歌仔戲背景音樂
  grab_bgm = loadSound('assets/bgm.mp3');  //搶孤背景音樂1
  grab_bgm_grab = loadSound('assets/bgm_grab.mp3');  //搶孤背景音樂2
  sound_correct = loadSound('assets/sound_correct.mp3');  //答對音效
  sound_error = loadSound('assets/sound_error.mp3');  //答錯音效
  grab_bg = loadImage('assets/Grab_orphans_1.jpeg');
  grab_start = loadImage('assets/Start.png');
  grab_again = loadImage('assets/again.png');
  grab_back_map = loadImage('assets/back_map.png');
  next = loadImage('assets/next.png');
  err = loadImage('assets/error.png');
  corr = loadImage('assets/correct.png');
  grab_background1 = loadImage('assets/grab_background_2.jpg');
  grab_background2 = loadImage('assets/grab_background_4-2.jpg');
  grab_background3 = loadImage('assets/grab_background_5.jpg');
  grab1 = loadImage('assets/grab1.png');
  grab2 = loadImage('assets/grab2.png');
  grab_question_background = loadImage('assets/grab_cartoon2.jpg');
  grab_story1 = loadImage('assets/grab_story_1.jpg');
  grab_story2 = loadImage('assets/grab_story_2.jpg');
  grab_story3 = loadImage('assets/grab_story_3.jpg');
  grab_qa1 = loadImage('assets/grab_qa1.jpeg');
  grab_qa2 = loadImage('assets/grab_qa2.jpeg');
  grab_qa3 = loadImage('assets/grab_qa3.jpeg');
  fishImg = loadImage('assets/swordfish_blue.png');
  fish_bgm = loadSound('assets/fish_back .mp3');
  fish_qa1 = loadImage('assets/fish_qa1.jpeg');
  fish_qa2 = loadImage('assets/fish_qa2.jpeg');
  fish_qa3 = loadImage('assets/fish_qa3.jpeg');
  fish_qa4 = loadImage('assets/fish_qa4.jpeg');
  fish_story1 = loadImage('assets/fish_story_1.jpeg');
  fish_story2 = loadImage('assets/fish_story_2.jpg');
  fish_story3 = loadImage('assets/fish_story_3.jpg');
  fish_story4 = loadImage('assets/fish_story_4.jpg');
  GUNimg = loadImage('assets/gun.png');
  fish_background = loadImage('assets/gamebg.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  page = 1;
  positionX = -2940 + windowWidth / 2;
  positionY = -1273 + windowHeight / 2;
  if(windowWidth >= windowHeight)
  {
    widthSize = windowHeight * 4 / 3;
    heightSize = windowHeight;
  }
  else
  {
    widthSize = windowWidth;
    heightSize = windowWidth * 3 / 4;
  }
  character = character_front;
  dotSize = heightSize / 11;
  opera_positionX = widthSize * .24;
  opera_positionY = heightSize * .35;
  characterHeight = heightSize * .3;
  characterWidth = widthSize * .15;
  opera_score = 0;
  bgm.setVolume(0.8);
  opera_bgm.setVolume(0.8);
  grab_bgm.setVolume(0.8);
  grab_bgm_grab.setVolume(0.8);
  [r,g,b,a] = back.get(-positionX + windowWidth / 2 , -positionY + windowHeight / 2);
}

function music_img()
{
  if(music_back %2 == 0)
  {
    image(music,5,5,30,30);
    bgm.setVolume(0.8);
    opera_bgm.setVolume(0.8);
    grab_bgm.setVolume(0.8);
    grab_bgm_grab.setVolume(0.8);
    fish_bgm.setVolume(0.8);
  }
  else
  {
    image(mute,5,5,30,30);
    bgm.setVolume(0);
    opera_bgm.setVolume(0);
    grab_bgm.setVolume(0);
    grab_bgm_grab.setVolume(0);
    fish_bgm.setVolume(0);
  }
  if(music_special %2 == 0)
  {
    image(volume_on,40,5,30,30);
    sound_correct.setVolume(0.8);
    sound_error.setVolume(0.8);
  }
  else
  {
    image(volume_off,40,5,30,30);
    sound_correct.setVolume(0);
    sound_error.setVolume(0);
  }
}

function draw() {
  if(grab_page > 0)
  {
    if(grab_music == 1){
      grab_music1();
    }
    else if(grab_music == 2){
      grab_music2();
    }
  }
  if (page == 1)
  {
    music_img();
    entry();
  }
  else if(page == 2)
  {
    music_img();
    story1_page();
  }
  else if(page == 3)
  {
    music_img();
    story2_page();
  }
  else if(page == 4)
  {
    music_img();
    story3_page();
  }
  else if(page == 0)
    {
      i += 1;
      music_img();
      move();
      if(map_small == 1)
      {
        mapSmall();
      }
    }
  else if(page == 5)
  {
    exit_page();
  }
  else if(grab_page == 1 || grab_page == 2){
    
    if(grab_word_num == 2){
      grab_page = 3;
      grab_word_num = 0;
      // background(grab_bg);
      // stroke(0);
      // strokeWeight(1);
      // fill(255, 255, 255, 200);
      // rect(150, 100, 500, 500);
      image(grab_story3,0,0,800,700);
    
      image(grab_start, 330, 500);
    
      // noStroke();
      // textSize(32);
      // fill(0, 134, 139);
      // text(grab_word[2], 200, 150);
      music_img();
      
    }
    else if(grab_word_num == 0){
      background(grab_bg);
      grab_page1();
    }
    else if(grab_word_num == 1){
      background(grab_bg);
      grab_page2();
    
    }
  }
  else if(opera_page == 1)
  {
    music_img();
    opera_page1();
  }
  else if(opera_page == 2)
  {
    music_img();
    opera_page2();
  }
  else if(opera_page == 3)
  {
    music_img();
    opera_page3();
  }
  else if(opera_page == 4)
  {
    music_img();
    opera_page4();
  }
  else if(opera_page == 5)
  {
    music_img();
    opera_page5();
  }
  else if(opera_page == 6)
  {
    music_img();
    opera_page6();
  }
  else if(opera_page == 7)
  {
    music_img();
    opera_page7();
  }
  if(grab_r == 1 && grab_l ==1){
    grabY -= 20;
    grab_r = 0;
    grab_l = 0;
  }
  
  if(grabY <= 0 && grab_page == 4){
    grab_music = 1;
    grabY = 520;
    // grab_setQuestion();
    // grab_setChoice();
    image(grab_qa1,0,0,800,700);
    grab_page = 11;
  }
  else if(grabY <= 300 && grab_page == 5){
    grab_music = 1;
    grabY = 450;
    // grab_setQuestion();
    // grab_setChoice();
    image(grab_qa2,0,0,800,700);
    grab_page = 11;
  }
  else if(grabY <= 150 && grab_page == 6){
    grab_music = 1;
    grabY = 520;
    // grab_setQuestion();
    // grab_setChoice();
    image(grab_qa3,0,0,800,700);
    grab_page = 11;
  }
  
  if(grab_error == 1){
    grab_ansError();
    grab_error = 0;
    if(grab_number < 3){
      grab_number += 1;
    }
  }
  else if (grab_error == -1){
    grab_ansCorrect();
    grab_error = 0;
    if(grab_number < 3){
      grab_number += 1;
    }
  }
  if(fish_page == 1)
  {
    background(0);
    fish_page1();
  }
  else if(fish_page == 1.1)
  {
    background(0);
    fish_page1_1();
  }
  else if(fish_page == 1.2)
  {
    background(0);
    fish_page1_2();
  }
  else if(fish_page == 2)
  {
    background(0);
    fish_page2();
  }
  else if(fish_page == 3)
  {
    background(0);
    fish_page3();
  }
  else if(fish_page == 4)
  {
    background(0);
    fish_page4();
  }
  else if(fish_page == 5)
  {
    background(0);
    fish_page5();
  }
  else if(fish_page == 6)
  {
    background(0);
    fish_page6();
  }
  else if(fish_page == 7)
  {
    background(0);
    fish_page7();
  }
  else if(fish_page == 8)
  {
    background(0);
    fish_page8();
  }
}

function move(){
  if(keyIsDown(39)) {      // right
        
        if(i%14 == 0)
        {
          character = character_right1;
        }
        else if(i%14 == 7)
        {
          character = character_right2;
        }
        [r,g,b,a] = back.get(-positionX + windowWidth / 2 + step, -positionY + windowHeight / 2);
        if((r == 117 && g == 155 && b == 132)|| (r == 135 && g == 203 && b == 239))
        {
          positionX = positionX;
        }
        else
        {
          positionX -= step;
        }
    }
    else if(keyIsDown(37)) { // left
        if(i%14 == 0)
        {
          character = character_left1;
        }
        else if(i%14 == 7)
        {
          character = character_left2;
        }
        [r,g,b,a] = back.get(-positionX + windowWidth / 2 - step , -positionY + windowHeight / 2);
      if((r == 117 && g == 155 && b == 132)|| (r == 135 && g == 203 && b == 239))
        {
          positionX = positionX;
        }
        else
        {
          positionX += step; 
        }
    }
    else if(keyIsDown(40)) { // down
        character = character_front;
      [r,g,b,a] = back.get(-positionX + windowWidth / 2 , -positionY + windowHeight / 2 + step);
      if((r == 117 && g == 155 && b == 132)|| (r == 135 && g == 203 && b == 239))
        {
          positionY = positionY;
        }
        else
        {
          positionY -= step;
        }
    }
    else if(keyIsDown(38)) { // up
        character = character_back;
      [r,g,b,a] = back.get(-positionX + windowWidth / 2 , -positionY + windowHeight / 2 - step); 
      if((r == 117 && g == 155 && b == 132)|| (r == 135 && g == 203 && b == 239))
        {
          positionY = positionY;
        }
        else
        {
          positionY += step; 
        }
    }
  if (positionX >= step)
    {
      positionX = 0;
    }
  else if(positionX <= -imageWidth + windowWidth - step)
    {
      positionX = -imageWidth + windowWidth;
    }
  if(positionY >= step)
    {
      positionY = 0;
    }
  else if(positionY <= -imageHeight + windowHeight - step)
    {
      positionY = -imageHeight + windowHeight;
    }
  image(back, positionX, positionY, imageWidth, imageHeight);
  image(character,windowWidth / 2 - 50,windowHeight / 2 - 100,100,100);
  
  //按鈕出現
  if(positionX <= -2410 + windowWidth / 2 && positionY <= -1728 + windowHeight / 2 && positionX >= -2685 + windowWidth / 2 && positionY >= -2088 + windowHeight / 2)
    {
      image(opera_icon,windowWidth - 110,windowHeight - 110,100,100);
    }
  else if(positionX <= -3515 + windowWidth / 2 && positionY <= -668 + windowHeight / 2 && positionY >= -1118 + windowHeight / 2 && positionX >= -3720 + windowWidth / 2)
    {
      image(grab_icon,windowWidth - 130,windowHeight - 130,150,150);
    }
  else if(positionX <= -3720 + windowWidth / 2 && positionY <= -2953 + windowHeight / 2 && positionX >= -4065 + windowWidth / 2 && positionY >= -3098 + windowHeight / 2)
  {
    image(fish_icon,windowWidth - 130 , windowHeight - 130 , 150,150);
  }
  else if(positionX <= -2845 + windowWidth / 2 && positionY <= -3454 + windowHeight / 2 && positionX >= -3180 + windowWidth / 2 && positionY >= -3763 + windowHeight / 2)
  {
    image(exit_icon,windowWidth - 100 , windowHeight - 100 , 80,80);
  }
  image(small_map,windowWidth - 100, 10, 100,100);
  music_img();
  
  // noStroke();
  // textSize(32);
  // fill(255);
  // text(positionY,0,50);
  // text(page,100,50);
  // text(mouseX,0,200);
  // text(mouseY,100,200);
  
}

function mousePressed()
{
  if(mouseX >= 5 && mouseX <= 30 && mouseY > 5 && mouseY <= 30)
  {
    music_back += 1;
    music_img();
  }
  else if(mouseX >= 40 && mouseX <= 70 && mouseY > 5 && mouseY <= 30)
  {
    music_special += 1;
    music_img();
  }
  if(page == 1)
  {
    if(mouseX >= windowWidth / 3 && mouseY >= windowHeight * 7 / 12 && mouseX <= windowWidth * 2 / 3 && mouseY <= windowHeight * 5 / 6)
    {
      bgm.play();
      bgm.setLoop(true);
      page = 2;
    }
  }
  else if((page == 2 || page == 3) && !(mouseX >= 5 && mouseX <= 30 && mouseY > 5 && mouseY <= 30) && !(mouseX >= 40 && mouseX <= 70 && mouseY > 5 && mouseY <= 30))
  {
     page += 1; 
  }
  else if(page == 4 && !(mouseX >= 5 && mouseX <= 30 && mouseY > 5 && mouseY <= 30) && !(mouseX >= 40 && mouseX <= 70 && mouseY > 5 && mouseY <= 30))
  {
    page = 0;
  }
  else if (page == 0)
  {
    if(positionX <= -2410 + windowWidth / 2 && positionY <= -1728 + windowHeight / 2 && positionX >= -2685 + windowWidth / 2 && positionY >= -2088 + windowHeight / 2 && mouseX >= windowWidth - 110 && mouseY >= windowHeight - 110)
    {
        page = -1;
        opera_page = 1;
        createCanvas(widthSize,heightSize);
        bgm.pause();
        opera_bgm.play();
        opera_bgm.setLoop(true);
    }
    else if(positionX <= -3515 + windowWidth / 2 && positionY <= -668 + windowHeight / 2 && positionY >= -1118 + windowHeight / 2 && positionX >= -3720 + windowWidth / 2 && mouseX >= windowWidth - 110 && mouseY >= windowHeight - 110) 
    {
        bgm.pause();
        grab_bgm.play();
        grab_bgm.setLoop(true);
        createCanvas(800, 700);
        grab_page = 1;
        page = -1;
    }
    else if(positionX <= -3720 + windowWidth / 2 && positionY <= -2953 + windowHeight / 2 && positionX >= -4065 + windowWidth / 2 && positionY >= -3098 + windowHeight / 2 && mouseX >= windowWidth - 110 && mouseY >= windowHeight - 110)
    {

        bgm.pause();
        fish_bgm.play(); 
        fish_bgm.setLoop(true);
        createCanvas(800, 600);
        background(0);
        page = -1;
        fish_page = 1;
        fish_score = 0;
        fish_question_number = 0;
        score = 0;
        a = 0;
        timer = 30;
        engine = Engine.create();
        world = engine.world;
        gun = new Gun(130, 450, 80, 80);
        ground = new Ground(0, height-10, 1800, 20);
        slingshot = new SlingShot(130, 450, gun.body);
        fish = new Box(450, 300, 125, 125);
        const mouse = Mouse.create(canvas.elt);

        const options = {
    mouse: mouse
  }
        mConstraint = MouseConstraint.create(engine, options);
        World.add(world, mConstraint);
      
    }
    else if(positionX <= -2845 + windowWidth / 2 && positionY <= -3454 + windowHeight / 2 && positionX >= -3180 + windowWidth / 2 && positionY >= -3763 + windowHeight / 2 && mouseX >= windowWidth - 110 && mouseY >= windowHeight - 110)
    {
      bgm.stop();
      // createCanvas(windowWidth,windowHeight);
      page = 5;
      positionX = -2940 + windowWidth / 2;
      positionY = -1273 + windowHeight / 2;
      i = 0;  //計算地圖次數，播放行走動畫
      music_back = 0;  //判斷背景音樂是否開啟
      music_special = 0;  //判斷音效是否開啟
      map_small = 0; //小地圖是否開啟
      opera_positionX = widthSize * .24;
      opera_positionY = heightSize * .35;
    }
    else if(map_small == 0 && mouseX >= windowWidth - 100 && mouseY >= 10 && mouseY <= 110)
    {
      map_small = 1;
      mapSmall();
    }
    else if(map_small == 1 && mouseX >= windowWidth * .85, mouseY >= windowHeight * .05 && mouseY <= windowHeight * .15)
    {
      map_small = 0;
    }
    
    
      
  }
  if(mouseX > 330 && mouseX < 500 && mouseY > 500 && mouseY < 560 && grab_page == 3) {      
      grab_page4();
  }
  else if(mouseX > 330 && mouseX < 500 && mouseY > 500 && mouseY < 560 && grab_page == 7) {   
    grab_score = 0;
    grab_number = 0;
    grab_page = 0;
    page = 0;
    grab_bgm.stop();
    bgm.play();
    map_small = 0;
    createCanvas(windowWidth,windowHeight);
    
  }
  else if(mouseX > 575 && mouseX < 595 && mouseY > 530 && mouseY < 570 && (grab_page == 1 || grab_page == 2)) {
    grab_word_num += 1;
  }
  else if(mouseX > 200 && mouseX < 220 && mouseY > 540 && mouseY < 560 && grab_page == 2) {      
    grab_word_num -= 1;
  }
  else if(mouseX > 20 && mouseX < 20+350 && mouseY > 280 && mouseY < 280+180 && grab_page == 11){
    grab_correct("A");
  }
  else if(mouseX > 430 && mouseX < 430+350 && mouseY > 280 && mouseY < 280+180 && grab_page == 11){
    grab_correct("B");
  }
  else if(mouseX > 20 && mouseX < 20+350 && mouseY > 500 && mouseY < 500+180 && grab_page == 11){
    grab_correct("C");
  }
  else if(mouseX > 430 && mouseX < 430+350 && mouseY > 500 && mouseY < 500+180 && grab_page == 11){
    grab_correct("D");
  }
  else if(mouseX > 540 && mouseX < 630 && mouseY > 550 && mouseY < 580 && grab_page == 15) {   
    
    if(grab_number == 1){
      grab_page5();
    }
    else if(grab_number == 2){
      grab_page6();
    }
    else if(grab_number == 3){
      grab_page7();
    }
  }
  if(opera_page == 1)
    {
      if(mouseX > widthSize - 120 && mouseY > heightSize * .9 + 20)
        {
          opera_page = 2;
        }
    }
  else if(opera_page == 2)
    {
      if(mouseX > widthSize - 120 && mouseY > heightSize * .9 + 20)
        {
          opera_page = 3;
        }
      else if(mouseX < 120 && mouseY > heightSize * .9 + 20)
      {
        opera_page = 1;
      }
    }
  else if(opera_page == 4)
    {
      if(mouseX > 30 && mouseX < widthSize * .47 && mouseY > heightSize * .36 && mouseY < heightSize * .54)
      {
        opera_correct("A");
      }
    else if(mouseX > widthSize * .52 && mouseX < widthSize * .95 && mouseY > heightSize * .36 && mouseY < heightSize * .54)
      {
        opera_correct("B");
      }
    else if(mouseX > 30 && mouseX < widthSize * .47 && mouseY > heightSize * .61 && mouseY < heightSize * .79)
      {
        opera_correct("C");
      }
    else if(mouseX > widthSize * .52 && mouseX < widthSize * .95 && mouseY > heightSize * .61 && mouseY < heightSize * .79)
      {
        opera_correct("D");
      }
    }
  else if(opera_page == 6 || opera_page == 7)
  {
    if (mouseX > widthSize * 7 / 8 - next.width*3/5 - 10 && mouseY > heightSize * 8.5 / 10 - next.height*3/5 - 10 && mouseX < widthSize * 7 / 8 && mouseY < heightSize * 8.5 / 10)
    {
      if (opera_question_number < 3)
      {
        opera_question_number += 1;
        opera_page = 3;
      }
      else
      {
        opera_page = 5;
      }
    }
  }
  else if(opera_page == 5)
  {
    if(mouseX >= widthSize * .4 && mouseY >= heightSize * .65 && mouseX < widthSize * .6 && heightSize * .65 + widthSize * .2)
    {
      opera_score = 0;
      opera_question_number = 0;
      opera_page = 0;
      page = 0;
      opera_bgm.stop();
      bgm.play();
      opera_positionX = widthSize * .24;
      opera_positionY = heightSize * .35;
      map_small = 0;
      createCanvas(windowWidth,windowHeight);
    }
  }
  if(fish_page > 0)
  {
    if(fish_page == 1)
    {
      if(mouseX >  540 && mouseY > 480 && mouseX < 660 && mouseY < 530)
        {
          fish_page = 1.1;
        }
    }
    else if(fish_page == 1.1)
    {
      if(mouseX >  540 && mouseY > 480 && mouseX < 660 && mouseY < 530)
        {
          fish_page = 1.2;
        }
      else if(mouseX >  110 && mouseY > 480 && mouseX < 230 && mouseY < 530)
      {
        fish_page = 1;
      }
    }
    else if(fish_page == 1.2)
    {
      if(mouseX >  540 && mouseY > 480 && mouseX < 660 && mouseY < 530)
        {
          fish_page = 2;
        }
      else if(mouseX >  110 && mouseY > 480 && mouseX < 230 && mouseY < 530)
      {
        fish_page = 1.1;
      }
    }
  else if(fish_page == 2)
    {
      if(mouseX >  540 && mouseY > 480 && mouseX < 660 && mouseY < 530)
        {
          fish_page = 3;
        }
      else if(mouseX >  110 && mouseY > 480 && mouseX < 230 && mouseY < 530)
      {
        fish_page = 1.2;
      }
    }
  else if(fish_page == 4)
    {
      if(mouseX >  330 && mouseX < 460  && mouseY > 470 && mouseY < 540)
        {
          fish_page = 5;
        }
    }
   else if(fish_page == 5)
    {
      if(mouseX > 30 && mouseX < 380 && mouseY > 150 && mouseY < 330)
      {
        fish_correct("A");
      }
      else if(mouseX > 420 && mouseX < 770 && mouseY > 150 && mouseY < 330)
      {
        fish_correct("B");
      }
      else if(mouseX > 30 && mouseX < 380 && mouseY > 370 && mouseY < 550)
      {
        fish_correct("C");
      }
      else if(mouseX > 420 && mouseX < 770 && mouseY > 370 && mouseY < 550)
      {
        fish_correct("D");
      }
    }
   else if(fish_page == 6)
    {
      if(mouseX >  640 && mouseX < 780  && mouseY > 500 && mouseY < 560)
        {
          
          if(fish_question_number == 3){
            fish_page = 8;
          }
          else{
            fish_page = 5;
          fish_question_number +=1;
          }
          
        }
    }
  else if(fish_page == 7)
    {
      if(mouseX >  640 && mouseX < 780  && mouseY > 500 && mouseY < 560)
        {
          fish_page = 5;
          fish_question_number +=1;
          if(fish_question_number == 4){
            fish_page = 8;
          }
        }
    }
  else if(fish_page == 8)
  {
    if(mouseX > 330 && mouseX < 500 && mouseY > 500 && mouseY < 560)
    {
      fish_score = 0;
      fish_question_number = 0;
      score = 0;
      a = 0;
      timer = 30;
      fish_page = 0;
      page = 0;
      fish_bgm.stop();
      bgm.play();
      map_small = 0;
      createCanvas(windowWidth,windowHeight);
    }
  }
  }
  if(page == 5)
  {
    if(mouseX > windowWidth - 150 && mouseY > windowHeight - 50)
    {
      createCanvas(windowWidth,windowHeight);
      page = 1;
    }
  }
}

function opera_page1(){
  image(opera_info1,0,0,widthSize,heightSize);
  // noStroke();
  // fill(255,248,170,180);
  // rect(20,20,widthSize-40,heightSize*.8);
  // textSize(24);
  // noStroke();
  // fill(47,79,79);
  // text("歌仔戲是源自台灣本土，具代表性的表演藝術。\n歌仔戲雛形在1900初於宜蘭發源，因音樂曲調\n富含色彩，使用方言俚語，通俗易懂，民國初年\n盛行一時。",22,50);
  // noStroke();
  // fill(0,255,127);
  // rect(widthSize - 160,heightSize * .9 + 20, 140,60);
  // noStroke();
  // textSize(32);
  // fill(139,0,0);
  // text("NEXT>",widthSize - 150,heightSize * .9 + 50);
  image(next_button,widthSize - 120,heightSize * .9 + 20, 115,45);
  music_img();
  
}

function opera_page2(){
  image(opera_info2,0,0,widthSize,heightSize);
  // noStroke();
  // fill(255,248,170,180);
  // rect(20,20,widthSize-40,heightSize*.8);
  // textSize(24);
  // noStroke();
  // fill(47,79,79);
  // text("遊戲介紹",22,50);
  // noStroke();
  // fill(0,255,127);
  // rect(widthSize - 160,heightSize * .9 + 20 , 140,60);
  // noStroke();
  // textSize(32);
  // fill(139,0,0);
  // text("PLAY >",widthSize - 150,heightSize * .9 + 50);
  image(play_button,widthSize - 120,heightSize * .9 + 20, 115,45);
  image(back_button,5,heightSize * .9 + 20, 115,45);
  music_img();
}

function opera_page3()
{
  image(img1,0,0,widthSize,heightSize);
  
  if(keyIsDown(LEFT_ARROW))
    {
      opera_positionX -= 1;
    }
  else if(keyIsDown(RIGHT_ARROW))
    {
      opera_positionX += 1;
    }
  if(keyIsDown(UP_ARROW))
    {
      opera_positionY -= 1;
    }
  else if(keyIsDown(DOWN_ARROW))
    {
      opera_positionY += 1;
    }
  if (opera_positionX < widthSize / 7)
    {
      opera_positionX = widthSize / 7;
    }
  else if(opera_positionX >= widthSize * 11 / 14)
    {
      opera_positionX = widthSize * 11 / 14;
    }
  if (opera_positionY + characterHeight > heightSize * 4 / 5)
    {
      opera_positionY = heightSize * 4 / 5 - characterHeight;
    }
  else if(opera_positionY + characterHeight < heightSize * .65)
    {
      opera_positionY = heightSize * .65 - characterHeight;
    }
  if(opera_question_number == 0)
  {
    opera_character = side;
    image(dot,widthSize * .35 , heightSize * .65 - dotSize / 2, dotSize, dotSize);
  }
  else if(opera_question_number == 1)
  {
    opera_character = front;
    image(dot,widthSize * .2 , heightSize * .75 - dotSize / 2, dotSize, dotSize);
  }
  else if(opera_question_number == 2)
  {
    opera_character = front;
    image(dot,widthSize * .75, heightSize * .75 - dotSize / 2, dotSize, dotSize);
  }
  else if(opera_question_number == 3)
  {
    opera_character = front;
    image(dot,widthSize * .58, heightSize * .65 - dotSize / 2, dotSize, dotSize);
  }
  
  image(opera_character,opera_positionX,opera_positionY,characterWidth,characterHeight);
  if((opera_positionX >= widthSize * .27 && opera_positionX <= widthSize * .33 && opera_positionY >= heightSize * .35 && opera_positionY <= heightSize * .38 && opera_question_number == 0) || (opera_positionX >= widthSize / 7 && opera_positionX <= widthSize * .22 && opera_positionY >= heightSize * 0.44 && opera_positionY <= heightSize *.48 && opera_question_number == 1) || (opera_positionX >= widthSize * .64 && opera_positionX <= widthSize * .77 && opera_positionY >= heightSize * 0.44 && opera_positionY <= heightSize *.48 && opera_question_number == 2) || (opera_positionX >= widthSize * .48 && opera_positionX <= widthSize * .6 && opera_positionY >= heightSize * .35 && opera_positionY <= heightSize * .38 && opera_question_number == 3) )
    {
      opera_page = 4;
    }
  music_img();
}

function opera_page4()
{
  background(opera_qa_back);
  
  if(opera_question_number == 0)
  {
    image(opera_qa1,0,0,widthSize,heightSize);
  }
  else if(opera_question_number == 1)
  {
    image(opera_qa2,0,0,widthSize,heightSize);
  }
  else if(opera_question_number == 2)
  {
    image(opera_qa3,0,0,widthSize,heightSize);
  }
  else if(opera_question_number == 3)
  {
    image(opera_qa4,0,0,widthSize,heightSize);
  }
  else
  {
    opera_setQuestion();
    opera_setChoice();
  }
  // noStroke();
  // textSize(32);
  // fill(255);
  // text(mouseX,0,50);
  // text(widthSize,100,50);
  // text(mouseY,0,100);
  // text(heightSize,100,100);
  music_img();
}

function opera_page5()
{
  background(opera_qa_back);
  
  stroke(0);
  strokeWeight(1);
  fill(255, 255, 255, 230);
  rect(widthSize / 8, heightSize * 1.5 / 10,widthSize * .75, heightSize * .8);
  
  noStroke();
  textSize(32);
  fill(0, 134, 139);
  text('遊戲結束!!!', widthSize * .4, heightSize * .23);
  text('Score:', widthSize * .45, heightSize * .33);
  
  textSize(120);
  fill(0, 134, 139);
  strokeWeight(4);
  stroke(0);
  text(opera_score, widthSize * .38, heightSize * .6);
  
  image(map_pic, widthSize * .4, heightSize * .65,widthSize * .2,widthSize * .2);
  music_img();
}

function opera_page6()
{
  background(opera_qa_back);
  if(opera_music == 1)
  {
    sound_correct.play();
    opera_music = 0;
  }
    
  stroke(0);
  strokeWeight(1);
  fill(255, 255, 255, 230);
  rect(widthSize / 8, heightSize * 1.5 / 10,widthSize * .75, heightSize * .7);
  
  image(corr, widthSize / 2 - widthSize * .175, heightSize * 2 / 10, widthSize * .35, widthSize * .35);
  
  textSize(60);
  fill(0, 134, 139);
  strokeWeight(4);
  stroke(0);
  text('+100', widthSize / 2 - 75, heightSize * 3 / 10 + widthSize * .35);
  
  image(next, widthSize * 7 / 8 - next.width*3/5 - 10, heightSize * 8.5 / 10 - next.height*3/5 - 10, next.width*3/5, next.height*3/5);
  music_img();
}

function opera_page7()
{
  background(opera_qa_back);
  if (opera_music == 2)
  {
    sound_error.play();
    opera_music = 0;
  }
  
  
  stroke(0);
  strokeWeight(1);
  fill(255, 255, 255, 230);
  rect(widthSize / 8, heightSize * 1.5 / 10,widthSize * .75, heightSize * .7);
  
  image(err, widthSize / 2 - widthSize * .175, heightSize * 2 / 10, widthSize * .35, widthSize * .35);
  
  textSize(40);
  fill(0);
  noStroke();
  text("正確答案:", widthSize * .25, heightSize * 3 / 10 + widthSize * .35);
  
  textSize(60);
  fill(0);
  noStroke();
  text(opera_answer[opera_question_number], widthSize * .55, heightSize * 3 / 10 + widthSize * .36);
  
  image(next, widthSize * 7 / 8 - next.width*3/5 - 10, heightSize * 8.5 / 10 - next.height*3/5 - 10, next.width*3/5, next.height*3/5);
  music_img();
}

function opera_setQuestion()
{
  stroke(70,149,11);
  strokeWeight(2);
  fill(237,255,167,230);
  rect(20 , 20, widthSize - 40 , 100);
  textSize(28);
  fill(3,126,189);
  noStroke();
  text("題目："+opera_question[opera_question_number],50,50);
  music_img();
}

function opera_setChoice()
{
  stroke(70,149,11);
  strokeWeight(2);
  fill(237,255,167,230);
  rect(15 , heightSize / 2 - 20, widthSize / 2 - 20 , 90);
  rect(widthSize / 2 + 15 , heightSize / 2 - 20, widthSize / 2 - 20 , 90);
  rect(15 , heightSize / 2 + 80, widthSize / 2 - 20 , 90);
  rect(widthSize / 2 + 15 , heightSize / 2 + 80, widthSize / 2 - 20 , 90);
  textSize(20);
  fill(3,126,189);
  noStroke();
  text(opera_choice[opera_question_number][0],20,heightSize / 2);
  text(opera_choice[opera_question_number][1],widthSize / 2 + 20,heightSize / 2);
  text(opera_choice[opera_question_number][2],20,heightSize / 2 + 100);
  text(opera_choice[opera_question_number][3],widthSize / 2 + 20,heightSize / 2 + 100);
  music_img();
}

function opera_correct(answer)
{
  if(answer == opera_answer[opera_question_number] )
    {
      opera_score += 100;
      opera_page = 6;
      opera_music = 1;
    }
  else
    {
      
      opera_page = 7;
      opera_music = 2;
    }
}

function grab_music1(){  //播放音樂1(輕快)
  grab_music = 0;
  grab_bgm_grab.stop();
  grab_bgm.play();
  grab_bgm.setLoop(true);
}

function grab_music2(){  //播放音樂2(攀爬的音樂)
  grab_music = 0;
  grab_bgm.stop();
  grab_bgm_grab.play();
  grab_bgm_grab.setLoop(true);
}

function grab_ansError(){  //回答錯誤頁面
  sound_error.play();
  background(grab_question_background);
  
  stroke(0);
  strokeWeight(1);
  fill(255, 255, 255, 230);
  rect(150, 100, 500, 500);
  
  image(err, 330, 160,err.width*3/5,err.height*3/5);
  
  textSize(40);
  fill(0);
  noStroke();
  text("正確答案:", 200, 400);
  
  textSize(42);
  fill(0);
  noStroke();
  if(grab_number == 0){
    text(grab_Choice[grab_number][3], 240, 500);
  }
  else if(grab_number == 1){
    text(grab_Choice[grab_number][1], 240, 500);
  }
  else if(grab_number == 2){
    text(grab_Choice[grab_number][2], 240, 500);
  }
  
  image(next, 540, 550, next.width*3/5, next.height*3/5);
  music_img();
}

function grab_ansCorrect(){  //回答正確頁面
  sound_correct.play();
  background(grab_question_background);
  grab_score += 100;
  
  stroke(0);
  strokeWeight(1);
  fill(255, 255, 255, 230);
  rect(150, 100, 500, 500);
  
  image(corr, 300, 140,corr.width*4/5,corr.height*4/5);
  
  textSize(130);
  fill(0, 134, 139);
  strokeWeight(4);
  stroke(0);
  text('+100', 250, 490);
  
  image(next, 540, 550, next.width*3/5, next.height*3/5);
  music_img();
}

function grab_setQuestion()  //題目
{
  grab_page = 11;
  background(grab_question_background);
  stroke(0);
  strokeWeight(1);
  fill(255,182,193,200);
  rect(20 , 20, 800-40 , 200);
  textSize(46);
  fill(0,0,255);
  noStroke();
  text(grab_Question[grab_number],100,140);
  music_img();
}

function grab_setChoice()  //選項
{
  grab_page = 11;
  stroke(0);
  strokeWeight(1);
  fill(255,182,193,200);
  rect(20 , 280, 350 , 180);
  rect(20 , 500, 350 , 180);
  rect(430 , 280, 350 , 180);
  rect(430 , 500, 350 , 180);
  textSize(32);
  fill(0,0,255);
  noStroke();
  text(grab_Choice[grab_number][0],50,380);
  text(grab_Choice[grab_number][1],460,380);
  text(grab_Choice[grab_number][2],50,600);
  text(grab_Choice[grab_number][3],460,600);
  music_img();
}

function grab_correct(answer)  //確認答案
{
  if(grab_page == 11){
    grab_page = 15;
  }
  
  if(answer == grab_Answer[grab_number] ){
    grab_error = -1; //答案正確
  }
  else{
    grab_error = 1;
  }
}

function grab_page1(){  //介紹1
  grab_page = 1;
  image(grab_story1,0,0,800,700);
  // stroke(0);
  // strokeWeight(1);
  // fill(255, 255, 255, 200);
  // rect(150, 100, 500, 500);
  
  //triangle(230, 505, 258, 450, 286, 505);
  //fill(255, 150, 0);
  //triangle(220, 520, 200, 550, 220, 580);
  fill(255, 150, 0);
  triangle(580, 520, 600, 550, 580, 580);
  
  // noStroke();
  // textSize(32);
  // fill(0, 134, 139);
  // text(grab_word[grab_word_num], 200, 150);
  music_img();
  
}

function grab_page2(){  //介紹2
  grab_page = 2;
  image(grab_story2,0,0,800,700);
  // stroke(0);
  // strokeWeight(1);
  // fill(255, 255, 255, 200);
  // rect(150, 100, 500, 500);
  
  //triangle(230, 505, 258, 450, 286, 505);
  fill(255, 150, 0);
  triangle(220, 520, 200, 550, 220, 580);
  fill(255, 150, 0);
  triangle(580, 520, 600, 550, 580, 580);
  
  // noStroke();
  // textSize(32);
  // fill(0, 134, 139);
  // text(grab_word[grab_word_num], 200, 150);
  music_img();
}

function grab_page4(){  //攀爬1
  grab_music = 2;
  grab_page = 4;
  background(grab_background1);
  image(grab1,grabX,grabY,grab1.width/2,grab1.height/2);
  music_img();
}

function grab_page5(){  //攀爬2
  grab_music = 2;
  grab_page = 5;
  background(grab_background2);
  image(grab1,grabX,grabY,grab1.width/2,grab1.height/2);
  music_img();
}

function grab_page6(){  //攀爬3
  grab_music = 2;
  grab_page = 6;
  background(grab_background3);
  image(grab1,grabX,grabY,grab1.width/2,grab1.height/2);
  music_img();
}

function grab_page7(){  //結束頁
  grab_page = 7;
  background(grab_bg);
  strokeWeight(1);
  stroke(0);
  fill(255, 255, 255, 150);
  rect(150, 100, 500, 500);
  
  noStroke();
  textSize(32);
  fill(0, 134, 139);
  text('遊戲結束!!!', 200, 150);
  text('Score:', 200, 230);
  
  textSize(120);
  fill(0, 134, 139);
  strokeWeight(4);
  stroke(0);
  text(grab_score, 300, 400);
  
  image(map_pic, 330, 450,grab_again.width*3/5,grab_again.width*3/5);
  music_img();
}

function fish_page1(){
//   stroke(0);
//   strokeWeight(1);
//   //背景方框
//   fill(255, 255, 255, 150);
//   rect(110, 60, 600, 500);
//   //按鈕方框
//   fill(255, 150, 0);
//   rect(540, 480, 140, 60);
  
//   noStroke();
//   textSize(32);
//   fill(0, 150, 139);
//   text("所謂的「鏢旗魚」，就是被稱為沿海鏢刺\n漁業的捕魚方式，它是一種傳承久遠的古\n老漁獵法之一，是在日據時期由日本琉球\n群島傳入，再由台灣討海人改良後的一種\n漁獵方式，這種古老的鏢刺漁業一直存在\n於東海岸，傳承了一代又一代，堪稱為台\n灣少數健康且自然的捕魚方式。", 130, 110);
//   textSize(35);
//   fill(0, 150, 139);
//   text("下一頁", 555, 523);
  image(fish_story1,0,0,800,600);
  image(next_button,540,480, 115,45);
  music_img();
}

function fish_page1_1(){
//   stroke(0);
//   strokeWeight(1);
//   //背景方框
//   fill(255, 255, 255, 150);
//   rect(110, 60, 600, 500);
//   //按鈕方框
//   fill(255, 150, 0);
//   rect(540, 480, 140, 60);
  
//   noStroke();
//   textSize(32);
//   fill(0, 150, 139);
//   text("旗魚俗稱「丁挽」，鏢旗魚的漁船必須速\n度快捷、方向變換靈活。台灣東部海岸的\n漁船，通常選擇在東北季風強度5到6級\n的清晨出海，會有比較好的漁獲。依照各\n別船員的特殊專長，而實施細密分工。", 130, 110);
//   textSize(35);
//   fill(0, 150, 139);
//   text("下一頁", 555, 523);
  image(fish_story2,0,0,800,600);
  image(back_button,115,480, 115,45);
  image(next_button,540,480, 115,45);
  music_img();
}

function fish_page1_2(){
//   stroke(0);
//   strokeWeight(1);
//   //背景方框
//   fill(255, 255, 255, 150);
//   rect(110, 60, 600, 500);
//   //按鈕方框
//   fill(255, 150, 0);
//   rect(540, 480, 140, 60);
  
//   noStroke();
//   textSize(32);
//   fill(0, 150, 139);
//   text("前段：稱為鏢台，置有鏢槍2支及連結的\n鏢繩，可站右鏢手（船長）、左鏢手及鏢\n手助理（本地俗稱二手），一共3人。噸\n位較小的漁船，則只有一位鏢手及一位鏢\n手助理。\n中段：稱為架頂（瞭望台），可以站多位\n船員。瞭望台左右兩端的位置，稱為「架\n角」，由船長指定給眼力最好的人站立。\n其餘的新進船員，或眼力較差者，則分別\n站在瞭望台的中間。\n後段：稱為甲板及輪機間，配置掌舵及輪\n機員，一共2人。", 130, 110);
//   textSize(35);
//   fill(0, 150, 139);
//   text("下一頁", 555, 523);
  image(fish_story3,0,0,800,600);
  image(back_button,110,480, 115,45);
  image(next_button,540,480, 115,45);
  music_img();
}

function fish_page2(){
//   stroke(0);
//   strokeWeight(1);
//   //背景方框
//   fill(255, 255, 255, 150);
//   rect(110, 60, 600, 500);
//   //按鈕方框
//   fill(255, 150, 0);
//   rect(540, 480, 140, 60);
  
//   noStroke();
//   textSize(32);
//   fill(0, 150, 139);
//   text("遊戲說明", 350, 110);
//   text("文字敘述2", 130, 150);
//   textSize(30);
//   fill(0, 150, 139);
//   text("開始遊戲", 550, 523);
  image(fish_story4,0,0,800,600);
  image(back_button,110,480, 115,45);
  image(play_button,540,480, 115,45);
  music_img();
}

function fish_page3(){
  image(fish_background,0,0,800,600);
//--------計時----------
  textAlign(CENTER, CENTER);
  textSize(35);
  text(timer, 40, 50);
 if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if(timer == 0){
    fish_page = 4;
  }
//----------主程式-------------
  Matter.Engine.update(engine);
  ground.show();
  target_ground = rect(700, height-40, 50, 20);
  gun.show();
  fish.show();
  slingshot.show();
  textSize(35);
  text("Score : "+score, 630, 50);
  if(score > a){
    a++;
    World.remove(world, fish.body);
    World.remove(world, gun.body);
    gun = new Gun(130, 450, 80, 80);
    slingshot.attach(gun.body);
    fish = new Box(450, 300, 125, 125);
  }
  music_img();
}

function fish_page4(){
  stroke(0);
  strokeWeight(1);
  //背景方框
  fill(255, 255, 255, 150);
  rect(110, 60, 600, 500);
  //按鈕方框
  fill(255, 150, 0);
  rect(340, 480, 140, 60);
  textSize(35);
  fill(0, 150, 139);
  text("問答區", 410, 513);
  
  noStroke();
  textSize(90);
  fill(0, 150, 139);
  text("GAME OVER", width/2, height/2);
  music_img();
}

function fish_page5(){
  if(fish_question_number == 0)
  {
    image(fish_qa1,0,0,800,600);
  }
  else if(fish_question_number == 1)
  {
    image(fish_qa2,0,0,800,600);
  }
  else if(fish_question_number == 2)
  {
    image(fish_qa3,0,0,800,600);
  }
  else if(fish_question_number == 3)
  {
    image(fish_qa4,0,0,800,600);
  }
  else
  {
    fish_setQuestion();
    fish_setChoice();
  }
  
  music_img();
}

function fish_page6(){  //答對畫面
  background(0);
  if(fish_music == 1)
  {
    sound_correct.play();
    fish_music = 0;
  }
  stroke(0);
  strokeWeight(1);
  fill(255, 255, 255, 230);
  rect(170, 100, 450, 450);
  image(corr, 250, 140);
  textSize(130);
  fill(0, 134, 139);
  strokeWeight(4);
  stroke(0);
  text('+100', 400, 500);
  fill(255, 150, 0);
  rect(640, 500, 140, 60);
  textSize(35);
  strokeWeight(0);
  fill(0, 150, 139);
  text("回問答", 710, 535);
  music_img();
}

function fish_page7(){  //答錯畫面
  background(0);
  if(fish_music == 2)
  {
    sound_error.play();
    fish_music = 0;
  }
  stroke(0);
  strokeWeight(1);
  fill(255, 255, 255, 230);
  rect(170, 100, 450, 450);
  image(err, 250, 120);
  textSize(80);
  fill(0, 134, 139);
  strokeWeight(4);
  stroke(0);
  text('回答錯誤!', 400, 440);
  textSize(50);
  text('正確答案：' + fish_answer[fish_question_number], 400, 510);
  fill(255, 150, 0);
  rect(640, 500, 140, 60);
  textSize(35);
  strokeWeight(0);
  fill(0, 150, 139);
  text("回問答", 710, 535);
  music_img();
}

function fish_page8(){
  
  background(0);
  strokeWeight(1);
  stroke(0);
  fill(255, 255, 255, 150);
  rect(150, 100, 500, 500);
  
  noStroke();
  textSize(32);
  fill(0, 134, 139);
  text('遊戲結束!!!', 250, 130);
  text('Score:', 250, 200);
  
  textSize(120);
  fill(0, 134, 139);
  strokeWeight(4);
  stroke(0);
  text(score + fish_score, 400, 380);
  
  image(map_pic, 330, 450,grab_again.width*3/5,grab_again.width*3/5);
  music_img();
}

function fish_setQuestion()
{
  stroke(70,149,11);
  background(255);
  strokeWeight(2);
  fill(237,255,167,230);
  rect(30 , 20, 740, 100);
  textSize(28);
  fill(0,0,255);
  noStroke();
  text("題目："+fish_question[fish_question_number],250,60);
  music_img();
}

function fish_setChoice()
{
  stroke(70,149,11);
  strokeWeight(2);
  fill(237,255,167,230);
  rect(30 , 150, 350 , 180);
  rect(30 , 370, 350 , 180);
  rect(420 , 150, 350 , 180);
  rect(420 , 370, 350 , 180);
  textSize(20);
  fill(3,126,189);
  noStroke();
  if(fish_question_number == 1)
  {
    text(fish_choice[fish_question_number][0],85,180);
    text(fish_choice[fish_question_number][1],465,180);
    text(fish_choice[fish_question_number][2],85,400);
    text(fish_choice[fish_question_number][3],485,400);
  }
  else
  {
    text(fish_choice[fish_question_number][0],75,180);
    text(fish_choice[fish_question_number][1],465,180);
    text(fish_choice[fish_question_number][2],85,400);
    text(fish_choice[fish_question_number][3],475,400);
  }
  
  music_img();
}

function fish_correct(answer)
{
  if(answer == fish_answer[fish_question_number] )
    {
      fish_music = 1;
      fish_score += 100;
      //跳到對的頁面
      fish_page = 6;
      
    }
  else
    {
      //跳到錯的頁面
      fish_music = 2;
      fish_page = 7;
    }
}

function entry()
{
  image(entry_img,0,0,windowWidth,windowHeight);
}

function story1_page()
{
  image(story1,0,0,windowWidth,windowHeight);
  music_img();
}

function story2_page()
{
  image(story2,0,0,windowWidth,windowHeight);
  music_img();
}

function story3_page()
{
  image(story3,0,0,windowWidth,windowHeight);
  music_img();
}

function exit_page()
{
  
  image(exit_img,0,0,windowWidth,windowHeight);
  // noStroke();
  // fill(0,255,127);
  // rect(windowWidth - 110,windowHeight - 50 , 100,60);
  // noStroke();
  // textSize(32);
  // fill(139,0,0);
  // text("Exit >",windowWidth - 100,windowHeight - 20);
  image(exit_button,windowWidth - 110,windowHeight - 50,100,50);
  music_img();
}

function mapSmall()
{
  stroke(0);
  strokeWeight(2);
  rect(windowWidth * .1 , windowHeight * .1, windowWidth * .8, windowHeight * .8);
  image(back,windowWidth * .1 , windowHeight * .1, windowWidth * .8, windowHeight * .8);
  image(err,windowWidth * .85,windowHeight * .05,windowWidth * .1,windowWidth * .1);
  x = (-positionX + windowWidth / 2) / imageWidth;
  y = (-positionY + windowHeight / 2) / imageHeight;
  strokeWeight(0);
  fill(40,45,143,180);
  // rect((windowWidth * .8 * x) - 10 + windowWidth * .1  , (windowHeight * .8 * y) + windowHeight * .1 - 10,15,15);
  image(character_front,(windowWidth * .8 * x) - 10 + windowWidth * .1  , (windowHeight * .8 * y) + windowHeight * .1 - 10,15,15);
}

function AddScore(){
  score += 1;
}

function keyPressed()
{
  if(grab_page > 0)
  {
    if(key == 'a' && grab_page == 4){  // right
      grab_r = 1;
      background(grab_background1);
      image(grab1,grabX,grabY,grab1.width/2,grab1.height/2);
      music_img();
    } 
    else if(key == 'd' && grab_page == 4){  // left
      grab_l = 1;
      background(grab_background1);
      image(grab2,grabX,grabY,grab1.width/2,grab1.height/2); 
      music_img();
    } 
    else if(key == 'a' && grab_page == 5){  // right
      grab_r = 1;
      background(grab_background2);
      image(grab1,grabX,grabY,grab1.width/2,grab1.height/2); 
      music_img();
    } 
    else if(key == 'd' && grab_page == 5){  // left
      grab_l = 1;
      background(grab_background2);
      image(grab2,grabX,grabY,grab1.width/2,grab1.height/2); 
      music_img();
    } 
    else if(key == 'a' && grab_page == 6){  // right
      grab_r = 1;
      background(grab_background3);
      image(grab1,grabX,grabY,grab1.width/2,grab1.height/2); 
      music_img();
    } 
    else if(key == 'd' && grab_page == 6){  // left
      grab_l = 1;
      background(grab_background3);
      image(grab2,grabX,grabY,grab1.width/2,grab1.height/2); 
      music_img();
    }
  }
  else if(fish_page > 0)
  {
    if(key == 'r'){
      World.remove(world, gun.body);
      gun = new Gun(130, 450, 80, 80);
      slingshot.attach(gun.body);
    }
    if(key == ' '){
      World.remove(world, fish.body);
      World.remove(world, gun.body);
      gun = new Gun(130, 450, 80, 80);
      slingshot.attach(gun.body);
      fish = new Box(450, 300, 125, 125);
    }
  }
}

function mouseReleased(){
  if(fish_page > 0)
  {
    setTimeout(()=>{
    slingshot.fly();    
  },100);
  }
     
}