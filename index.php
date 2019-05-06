<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Miki Momoka's Portfolio</title>
  <meta name="description" content="三木百花のポートフォリオサイトです。">
  <link rel="shortcut icon" href="img/favi.png" type="image/png">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
    integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
</head>
<body>
  <div class="load">
    <div class="load-inner flex">
      <img src="img/icon-flower01.svg" alt="">
      <img src="img/icon-flower02.svg" alt="">
      <img src="img/icon-flower03.svg" alt="">
    </div>
  </div>

  <div class="sideNavi">
    <nav class="sideNavi-nav flex">
      <ul class="sideNavi-list between">
        <li class="naviList show on">
          <i class="naviList__icon fas fa-home"></i>
          <p class="naviList__title on">HOME</p>
        </li>
        <li class="naviList show">
          <i class="naviList__icon fas fa-laptop-code"></i>
          <p class="naviList__title">WORKS</p>
        </li>
        <li class="naviList show">
          <i class="naviList__icon fas fa-user"></i>
          <p class="naviList__title">PROFILE</p>
        </li>
        <li class="naviList show">
          <i class="naviList__icon fas fa-history"></i>
          <p class="naviList__title">HISTORY</p>
        </li>
        <li class="naviList show">
          <i class="naviList__icon fas fa-envelope"></i>
          <p class="naviList__title">CONTACT</p>
        </li>
      </ul>
    </nav>
  </div>
  <main class="main flex">
    <div class="btn-humb">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div class="contents">
      <div class="mainVisual">
        <h1 class="mainVisual__title">
          <?php include("read/svg-logo.html"); ?>
        </h1>
      </div>
      <section class="content content-home flex">
        <div class="home-main">
          <h2 class="home-main__title">Welcome to my portfolio site !!</h2>
          <p class="home-main__text">専門学校で、Webの勉強をしている、三木 百花 と申します。<br>私のポートフォリオサイトにお越し下さり、ありがとうございます♪
          </p>
          <h3 class="home-main__sub">What I have in mind</h3>
          <p class="home-main__text">私は、<strong>相手の立場や気持ち</strong>になって、考えることを心がけています。</p>
          <ul class="home-main__list">
            <li>相手の課題を研究し、アイデアを考え、実際につくる。</li>
            <li>効率的に綺麗でまとまったコードを書く。</li>
          </ul>
          <p class="home-main__last">将来は、考えやコーディングにこだわりを持って、<br>周りの人を幸せにできるようなフロントエンドのエンジニアになりたいです。</p>
        </div>
        <div class="scroll-works">
          <span></span>
          <span></span>
          <span></span>
          <p>WORKS</p>
        </div>
      </section>

      <section class="content content-works">
        <h2>WORKS</h2>
        <ul class="worksList flex rimit"></ul>
        <button class="btn-more">View&nbsp;More</button>
      </section>

      <section class="content content-profile">
        <div class="bg-profile">
          <?php include("read/svg-profile.html"); ?>
        </div>
          <h2>PROFILE</h2>
          <ul>
            <li>
              <h3>NAME</h3>
              <p>三木&nbsp;百花<br>(みき&nbsp;ももか)</p>
            </li>
            <li>
              <h3>SCHOOL</h3>
              <p>ECCコンピュータ専門学校(大阪)<br>Webエンジニア専攻(20年卒)</p>
            </li>
            <li>
              <h3>BIRTH&nbsp;DAY</h3>
              <p>1999/03/17&nbsp;20歳</p>
            </li>
            <li>
              <h3>ENGINEER&nbsp;SKILL</h3>
              <p>星の数は自己評価です。</p>
              <ul class="list-skill flex">
                <li>
                  <img src="img/skill01.svg" alt="HTML5のロゴ">
                  <p>HTML5</p>
                  <div>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                </li>
                <li>
                  <img src="img/skill02.svg" alt="CSS3のロゴ">
                  <p>CSS3</p>
                  <div>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                </li>
                <li>
                  <img src="img/skill03.svg" alt="Sassのロゴ">
                  <p>Sass</p>
                  <div>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                </li>
                <li>
                  <img src="img/skill04.svg" alt="JavaScriptのロゴ">
                  <p>JavaScript</p>
                  <div>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                </li>
                <li>
                  <img src="img/skill05.svg" alt="jQueryのロゴ">
                  <p>jQuery</p>
                  <div>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                </li>
                <li>
                  <img src="img/skill06.svg" alt="Vue.jsのロゴ">
                  <p>Vue.js</p>
                  <div>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                </li>
                <li>
                  <img src="img/skill07.svg" alt="PHPのロゴ">
                  <p>PHP</p>
                  <div>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                </li>
                <li>
                  <img src="img/skill08.svg" alt="MySQLのロゴ">
                  <p>MySQL</p>
                  <div>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                </li>
                <li>
                  <img src="img/skill09.svg" alt="Laravelのロゴ">
                  <p>Laravel</p>
                  <div>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                </li>
              </ul>
              <a href="guideline.html" target="_blank">&gt;&nbsp;コーディングガイドライン</a>
            </li>
            <li>
              <h3>REQUIREMENT</h3>
              <ul class="list-history">
                <li>2015年：日本商工会議所主催簿記検定試験3級合格</li>
                <li>2015年：全国商業高等学校協会主催 情報処理検定<br><span>ビジネス情報部門1級合格</span></li>
                <li>2016年：全国商業高等学校協会主催簿記実務検定1級合格</li>
                <li>2017年：文部科学省後援 色彩検定3級合格</li>
                <li>2018年：サーティファイ主催 Webクリエイター能力認定<br><span>エキスパート合格</span></li>
              </ul>
            </li>
            <li>
              <h3>EXPO&nbsp;&amp;&nbsp;CONVENTION</h3>
              <ul class="list-history">
                <li>2017年：学内コンテスト「ECC&nbsp;EXPO&nbsp;2017」に選出<br><span>作品名「み〜とぺっと」</span></li>
                <li>2017年：第１回&nbsp;専門学校&nbsp;HTML5作品アワード&nbsp;デザイン賞受賞<br><span>作品名「#mode」</span></li>
                <li>2018年：第13回&nbsp;若年者ものづくり競技大会<br><span>ウェブデザイン部門&nbsp;銅賞受賞</span></li>
                <li>2018年：Hack&nbsp;U&nbsp;2018&nbsp;OSAKAに出場&nbsp;作品名「Mr.SOS」</li>
                <li>2018年：学内コンテスト「ECC&nbsp;EXPO&nbsp;2018」に選出<br><span>作品名「みゅーびっく」</span></li>
              </ul>
            </li>
            <li>
              <h3>FAVORITE&nbsp;THINGS</h3>
              <p>楽器&nbsp;と&nbsp;ゲーム&nbsp;と&nbsp;うさぎ&nbsp;と&nbsp;ゆるりんぱんだ&nbsp;と&nbsp;コーディングが大好き。<br>フィギュアスケートを見るのも好きです。</p>
            </li>
            <li>
              <h3>MESSAGE</h3>
              <p class="profie-message">
                日頃から、どうすれば綺麗で効率的なコードが書けるかを考えながらコーディングしています。<br>
                中学校の頃の吹奏楽での活動の時から、集中してとことん磨くことが好きで、現在でのweb制作でも活かされています。<br>
                エンジニア専攻ですが、Webデザインも大好きです。<br>授業以外に、フレームワークや3Dアニメーションなどを勉強しています。<br>専門1年生の頃からお粥屋さんで働いています。<br>3年生になって、Webのアルバイトも始めました。
              </p>
            </li>
          </ul>
      </section>

      <section class="content content-history">
        <h2 class="content-history__title">HISTORY</h2>
        <ul class="content-history__list">
          <li class="history flex">
            <p class="history__year">2011〜2013</p>
            <div class="history__desc history-desc">
              <h3 class="history-desc__title">Junior&nbsp;high&nbsp;school&nbsp;days</h3>
              <p class="history-desc__text">中学校3年間は吹奏楽部に所属。パートリーダーも任されました。<br>この時は、自分のWindowsのパソコンでよく遊んでいました。</p>
            </div>
          </li>
          <li class="history flex">
            <p class="history__year">2014〜2016</p>
            <div class="history__desc history-desc">
              <h3 class="history-desc__title">High&nbsp;school&nbsp;days</h3>
              <p class="history-desc__text">大阪ビジネスフロンティアという商業高校に通っていました。
                <br>情報処理や簿記、ビジネスなどについての授業があり、その中で一番、情報処理の授業が楽しく、大好きでした。<br>吹奏楽部に所属し、パートリーダーも任されました。</p>
            </div>
          </li>
          <li class="history flex">
            <p class="history__year">2017</p>
            <div class="history__desc history-desc">
              <h3 class="history-desc__title">ECC&nbsp;computer&nbsp;college&nbsp;year1</h3>
              <p class="history-desc__text">前半は、グラフィックデザイン・Webデザイン・コーディングを全体的に学びました。<br>
              後半は、エンジニア専攻として、JavaScriptやPHPについて学び始めました。<br>
              とても楽しく、作品制作のモチベーションにも繋がりました。</p>
            </div>
          </li>
          <li class="history flex">
            <p class="history__year">2018</p>
            <div class="history__desc history-desc">
              <h3 class="history-desc__title">ECC&nbsp;computer&nbsp;college&nbsp;year2</h3>
              <p class="history-desc__text">２年生になり制作して行く中で、自分がバックエンドよりもフロントエンドの方が得意で、好きだということが分かりました。<br>
              そして、1年生の時に取れなかった皆勤を取ることができました！<br>おまけに後期の成績はオールA(Aが最高値)でした。当たり前なのですが、やはり嬉しいです。</p>
            </div>
          </li>
          <li class="history flex">
            <p class="history__year">2019</p>
            <div class="history__desc history-desc">
              <h3 class="history-desc__title">ECC&nbsp;computer&nbsp;college&nbsp;year3</h3>
              <p class="history-desc__text">3年生になって、WEB制作会社でアルバイトを始めました。<br>
              また、１年生から飲食店のアルバイトも続けており、3年目に突入しました。<br>
              現在、チーム制作で、企業の情報を登録し、皆が探せるというサイトを作っています。<br>
              それが完成したら、実際に次年度から学内の学生が使う予定です。</p>
            </div>
          </li>
        </ul>
      </section>

      <section class="content content-contact">
        <h2 class="content-contact__title">CONTACT</h2>
        <div class="content-contact__main contact">
          <div class="contact__mail">
            <p>なんでもお気軽に、ご連絡ください。</p>
            <a href="mailto:miki.momoka.0317@gmail.com" target="_blank">miki.momoka.0317@gmail.com</a>
          </div>
          <ul class="contact__sns between">
            <li><a href="https://facebook.com/MikiMomokaMusic" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="https://twitter.com/web_En_miki" target="_blank"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://www.instagram.com/pandasan0317" target="_blank"><i class="fab fa-instagram"></i></a></li>
          </ul>
          <p class="contact__git"><a href="https://github.com/MomokaMiki/"><i class="fab fa-github"></i><span>github</span></a></p>
        </div>
      </section>
    </div>
  </main>
  <footer class="foot">
    <small>&copy;&nbsp;2019&nbsp;&nbsp;Momoka&nbsp;Miki</small>
  </footer>

  <script src="js/jquery-3.3.1.min.js"></script>
  <!-- <script src="js/script.js"></script> -->
  <script src="src/concat/var.js"></script>
  <script src="src/concat/works.js"></script>
  <script src="src/concat/base.js"></script>
  <script src="src/concat/window.js"></script>
  <script src="src/concat/scroll.js"></script>
  <script src="src/concat/event.js"></script>
  <script type="text/javascript" src="//typesquare.com/3/tsst/script/ja/typesquare.js?5b49521a4774449c972b1df2e90393a3"
    charset="utf-8"></script>
</body>
</html>