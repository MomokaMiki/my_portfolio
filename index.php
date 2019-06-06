<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Miki Momoka's Portfolio</title>
  <meta name="description" content="Miki Momoka's Portfolio｜三木百花のポートフォリオサイトです。">
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
        <li class="naviList">
          <i class="naviList__icon fas fa-laptop-code"></i>
          <p class="naviList__title">WORKS</p>
        </li>
        <li class="naviList">
          <i class="naviList__icon fas fa-user"></i>
          <p class="naviList__title">PROFILE</p>
        </li>
        <li class="naviList">
          <i class="naviList__icon fas fa-history"></i>
          <p class="naviList__title">HISTORY</p>
        </li>
        <li class="naviList">
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
          <h2 class="home-main__title">Welcome to My Portfolio Site</h2>
          <p class="home-main__text">こんにちは。三木百花と申します。<br>私のポートフォリオにお越し下さり、ありがとうございます!</p>
          <div class="home-skill">
            <p class="home-skill__text">私は、使う人や一緒にものを作る人などの"相手"の視点になって、<br>よりわかりやすく、使いやすいものを作れるように、<br>日々新しい技術の習得や、ものづくりに励んでいます。</p>
            <h3 class="home-skill__title">Learning&nbsp;&nbsp;Skill</h3>
            <ul class="list-skill flex">
              <li>
                <p class="skill-logo"><img src="img/icon-html.svg" alt="HTML5のロゴ"></p>
                <p>HTML5</p>
              </li>
              <li>
                <p class="skill-logo"><img src="img/icon-css.svg" alt="CSS3のロゴ"></p>
                <p>CSS3</p>
              </li>
              <li>
                <p class="skill-logo"><img src="img/icon-sass.svg" alt="Sassのロゴ"></p>
                <p>Sass</p>
              </li>
              <li>
                <p class="skill-logo"><img src="img/icon-js.svg" alt="JavaScriptのロゴ"></p>
                <p>JavaScript</p>
              </li>
              <li>
                <p class="skill-logo"><img src="img/icon-jquery.svg" alt="jQueryのロゴ"></p>
                <p>jQuery</p>
              </li>
              <li>
                <p class="skill-logo"><img src="img/icon-vue.svg" alt="Vue.jsのロゴ"></p>
                <p>Vue.js</p>
              </li>
              <li>
                <p class="skill-logo"><img src="img/icon-php.svg" alt="PHPのロゴ"></p>
                <p>PHP</p>
              </li>
              <li>
                <p class="skill-logo"><img src="img/icon-mysql.svg" alt="MySQLのロゴ"></p>
                <p>MySQL</p>
              </li>
              <li>
                <p class="skill-logo"><img src="img/icon-laravel.svg" alt="Laravelのロゴ"></p>
                <p>Laravel</p>
              </li>
              <li>
                <p class="skill-logo"><img src="img/icon-node.svg" alt="Node.jsのロゴ"></p>
                <p>Node.js</p>
              </li>
            </ul>
          </div>
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
        <div class="searchArea">
          <p class="searchArea__content">
            #&nbsp;ハッシュタグで絞り込み
          </p>
          <ul class="searchArea__hash between">
            <li data-hash="season">#&nbsp;3年生</li>
            <li data-hash="worktype">#&nbsp;個人制作</li>
            <li data-hash="git">#&nbsp;GitHub</li>
          </ul>
          <button class="searchArea__btn"><i class="fas fa-times"></i></button>
        </div>
        <ul class="worksList flex rimit"></ul>
        <button class="btn-more">View&nbsp;More</button>
      </section>
      <section class="content content-profile">
        <div class="bg-profile flex">
          <?php include("read/svg-profile.html"); ?>
        </div>
        <h2>PROFILE</h2>
        <ul>
          <li>
            <h3>NAME</h3>
            <p>三木&nbsp;百花<br>(みき&nbsp;ももか)</p>
          </li>
          <li>
            <h3>EDUCATION</h3>
            <p>ECCコンピュータ専門学校(大阪)<br>Webエンジニア専攻(20年卒)</p>
          </li>
          <li>
            <h3>BIRTH&nbsp;DAY</h3>
            <p>1999/03/17&nbsp;20歳</p>
          </li>
          <li>
            <h3>ENGINEER&nbsp;SKILL</h3>
            <p>星の数は自己評価です。</p>
            <ul class="list-skill flex prof-list-kill">
              <li>
                <p class="skill-logo"><img src="img/icon-html.svg" alt="HTML5のロゴ"></p>
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
                <p class="skill-logo"><img src="img/icon-css.svg" alt="CSS3のロゴ"></p>
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
                <p class="skill-logo"><img src="img/icon-sass.svg" alt="Sassのロゴ"></p>
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
                <p class="skill-logo"><img src="img/icon-js.svg" alt="JavaScriptのロゴ"></p>
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
                <p class="skill-logo"><img src="img/icon-jquery.svg" alt="jQueryのロゴ"></p>
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
                <p class="skill-logo"><img src="img/icon-vue.svg" alt="Vue.jsのロゴ"></p>
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
                <p class="skill-logo"><img src="img/icon-node.svg" alt="Node.jsのロゴ"></p>
                <p>Node.js</p>
                <div>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
              </li>
              <li>
                <p class="skill-logo"><img src="img/icon-php.svg" alt="PHPのロゴ"></p>
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
                <p class="skill-logo"><img src="img/icon-mysql.svg" alt="MySQLのロゴ"></p>
                <p>MySQL</p>
                <div>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
              </li>
              <li>
                <p class="skill-logo"><img src="img/icon-laravel.svg" alt="Laravelのロゴ"></p>
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
            <a href="material/guideline/" target="_blank">&gt;&nbsp;コーディングガイドライン</a>
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
            <h3>INTEREST</h3>
            <p>楽器&nbsp;と&nbsp;ゲーム&nbsp;と&nbsp;うさぎ&nbsp;と&nbsp;ゆるりんぱんだ&nbsp;と&nbsp;コーディングが大好き。<br>フィギュアスケートを見たり、自分が気に入った風景の写真を撮ったりすることも好きです。</p>
          </li>
          <li>
            <h3>MESSAGE</h3>
            <p class="profie-message">
              私は、相手の立場や気持ちになって、考えることを心がけています。<br>実際に作ったものを使う人や、一緒にものを作る人が使いやすく、わかりやすいものを作ることが大切だと考えているからです。
              <br>将来は、フロントエンドエンジニアとして、コードのように実際には見えない部分まで細かく追求して、<br>お客様やチームのメンバーから喜んでもらえるものを作りたいと考えています。
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
              <h3 class="history-desc__title">Junior&nbsp;High&nbsp;School</h3>
              <p class="history-desc__text">中学校3年間は吹奏楽部に所属してフルートを担当。パートリーダーも任されました。<br>この時は、システムエンジニアである両親から譲ってもらったWindowsのパソコンでよく遊んでいました。</p>
            </div>
          </li>
          <li class="history flex">
            <p class="history__year">2014〜2016</p>
            <div class="history__desc history-desc">
              <h3 class="history-desc__title">Senior&nbsp;High&nbsp;School</h3>
              <p class="history-desc__text">大阪ビジネスフロンティアという商業高校に通っていました。
                <br>情報処理や簿記、ビジネスなどについての授業があり、その中で一番、情報処理の授業が楽しく、大好きでした。<br>吹奏楽部に所属し、パートリーダーも任されました。</p>
            </div>
          </li>
          <li class="history flex">
            <p class="history__year">2017</p>
            <div class="history__desc history-desc">
              <h3 class="history-desc__title">ECC&nbsp;Computer&nbsp;College&nbsp;1st</h3>
              <p class="history-desc__text">前半は、グラフィックデザイン・Webデザイン・コーディングを全体的に学びました。<br>
              後半は、エンジニア専攻として、JavaScriptやPHPについて深く学び始めました。<br>
              授業でのコーディングはとても楽しく、作品制作のモチベーションにも繋がりました。</p>
            </div>
          </li>
          <li class="history flex">
            <p class="history__year">2018</p>
            <div class="history__desc history-desc">
              <h3 class="history-desc__title">ECC&nbsp;Computer&nbsp;College&nbsp;2nd</h3>
              <p class="history-desc__text">夏に開催されたJAVADA主催の若年者ものづくり競技大会で銅賞を取ることができ、とても良い経験になりました。<br>
              人生で初めて自分だけの賞をもらえたのでとても嬉しかったですし、自分の自身にも繋がりました。<br>
              1年生の時に取れなかった皆勤を取ることができました！おまけに後期の成績はオールA(Aが最高値)でした。<br>当たり前のことではありますが、それが出来ていてこそ、作業効率などが上昇し、良いものが作れることに繋がっていると思います。</p>
            </div>
          </li>
          <li class="history flex">
            <p class="history__year">2019</p>
            <div class="history__desc history-desc">
              <h3 class="history-desc__title">ECC&nbsp;Computer&nbsp;College&nbsp;3rd</h3>
              <p class="history-desc__text">3年生になって、WEB制作会社でアルバイトを始めました。<br>
              そのアルバイトでは、ECサイトの開発をお手伝いさせていただいています。<br>
              また、１年生から飲食店のアルバイトも続けており、3年目に突入しました。<br>
              授業では、クラス全員でメディアを立ち上げたり、センサーなどを使ったコンテンツ制作など、様々な技術を使って制作しています。<br>
              自主的には、作品投稿/シェアサイトや、複数人で遊べるサービスなどを制作しています。
            </div>
          </li>
        </ul>
      </section>
      <section class="content content-contact">
        <h2 class="content-contact__title">CONTACT</h2>
        <div class="content-contact__main contact">
          <div class="contact__mail">
            <p>お気軽にご連絡ください。</p>
            <a href="mailto:miki.momoka.0317@gmail.com" target="_blank">miki.momoka.0317@gmail.com</a>
          </div>
          <ul class="contact__sns between">
            <li><a href="https://facebook.com/MikiMomokaMusic" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="https://twitter.com/web_En_miki" target="_blank"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://www.instagram.com/moka_music_" target="_blank"><i class="fab fa-instagram"></i></a></li>
          </ul>
          <p class="contact__git"><a href="https://github.com/MomokaMiki/" target="_blank"><i class="fab fa-github"></i><span>GitHub</span></a></p>
        </div>
      </section>
    </div>
    <button class="btn-top"></button>
  </main>
  <footer class="foot">
    <small>&copy;&nbsp;2019&nbsp;&nbsp;Momoka&nbsp;Miki</small>
  </footer>
  <script src="js/jquery-3.3.1.min.js"></script>
  <script src="js/script.js"></script>
  <script type="text/javascript" src="//typesquare.com/3/tsst/script/ja/typesquare.js?5b49521a4774449c972b1df2e90393a3" charset="utf-8"></script>
</body>
</html>