import React from 'react';
import Button from '@material-ui/core/Button';
import '../css/Work.css';
// import Portfolio1 from "../img/portfolio-image.jpg";
// import Portfolio2 from "../img/082com.jpg";
// import Portfolio3 from "../img/mimamoru-image.png";
// import Portfolio4 from "../img/botani-image.jpg";
// import Portfolio5 from "../img/movie-image.jpg";

export const MyCording = () => {
  return (
    <div>
      <div className='cording_item'>
        <div className='cording_item_left'>
          <a
            href='https://sakoshiho.herokuapp.com/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={`${process.env.PUBLIC_URL}/img/portfolio-image.jpg`}
              alt=''
            />
          </a>
        </div>
        <div className='cording_item_right'>
          <span class='bold'>ポートフォリオサイト</span>
          <br />
          <p>
            2020年11月　制作 <br />
            <br />
            HTML/CSSを学習後、VSCodeを用いてポートフォリオサイトを制作。
            <br />
            デザインからコーディングまで自身が担当。
            スクロール時のメニュー表示切替、ページトップボタンにはJavaScriptを使用。
            スキルバー部分は、jQueryプラグイン「skill.bars.jquery.js」をアレンジした。
            その他、Workのコーディングサイトタブには「ScrollReveal.js」のJSライブラリを使用し、
            デザインタブにはPinterestのようなグリッドレイアウトを採用。jQueryプラグイン「Fancybox3」を使用して、モーダルでデザイン画像が見られるように実装した。
            <br />
            Git経由でherokuへデプロイし、heroku上で公開している。
          </p>
          <Button
            variant='contained'
            color='primary'
            href='https://sakoshiho.herokuapp.com/'
            target='_blank'
            rel='noreferrer'
          >
            LINK TO SITE
          </Button>
        </div>
      </div>

      <div className='cording_item'>
        <div className='cording_item_left'>
          <a
            href='https://oyatsu.herokuapp.com/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={`${process.env.PUBLIC_URL}/img/082com.jpg`} alt='' />
          </a>
        </div>
        <div className='cording_item_right'>
          <span class='bold'>『082.com』</span>
          <br />
          <p>
            2020年12月　制作
            <br />
            <br />
            HTML /
            CSS　学習後、ポートフォリオサイトの次に制作した作品。VSCodeを用いて制作した。
            おやつを月に1回宅配するサブスクリプションサービスをイメージしたランディングページ。
            <br />
            デザインからコーディングまで自身が担当。サイトのロゴを含め、デザイン性の求められるLPのため、流行の非平行ヘッダーを取り入れ、背景画像をパララックスにして奥行きを出すことを意識した。
            <br />
            Git経由でherokuへデプロイし、heroku上で公開している。
          </p>
          <Button
            variant='contained'
            color='primary'
            href='https://oyatsu.herokuapp.com/'
            target='_blank'
            rel='noreferrer'
          >
            LINK TO SITE
          </Button>
        </div>
      </div>

      <div className='cording_item'>
        <div className='cording_item_left'>
          <a
            href='https://xd.adobe.com/view/8cba5861-c14a-4343-871b-46e6162b6f2a-d9e9/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={`${process.env.PUBLIC_URL}/img/mimamoru-image.png`}
              alt=''
            />
          </a>
        </div>
        <div className='cording_item_right'>
          <span class='bold'>MIMAMORU</span>
          <br />
          <p>
            2020年12月　制作
            <br />
            <br />
            自身が親と離れて暮らしているため、持病のある親の体調を逐一連絡をとって確認するのではなく、SNS上で楽しく情報共有できたらいいなと思い、
            Adobe XDを用いてアプリのプロトタイプを作成。 Adobe
            XDは前職で使用していたが、1から自身で全て作成したのは初めてだったので、とても良い経験になった。
            <br />
            Git経由でherokuへデプロイし、heroku上で公開している。
          </p>
          <Button
            variant='contained'
            color='primary'
            href='https://xd.adobe.com/view/8cba5861-c14a-4343-871b-46e6162b6f2a-d9e9/'
            target='_blank'
            rel='noreferrer'
          >
            LINK TO SITE
          </Button>
        </div>
      </div>

      <div className='cording_item'>
        <div className='cording_item_left'>
          <a
            href='https://bo-ta-ni.herokuapp.com/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={`${process.env.PUBLIC_URL}/img/botani-image.jpg`}
              alt=''
            />
          </a>
        </div>
        <div className='cording_item_right'>
          <span class='bold'>BOTANI</span>
          <br />
          <p>
            2020年12月～2021年1月　制作
            <br />
            <br />
            ボタニカルな雑貨を販売するオンラインショップをイメージした架空のECサイトを、VSCodeを用いて制作。
            <br />
            jQueryプラグイン『FlexSlider』をアレンジし、TOP画像をスライドで表示するようにした。
            <br />
            Git経由でherokuへデプロイし、heroku上で公開している。
          </p>
          <Button
            variant='contained'
            color='primary'
            href='https://bo-ta-ni.herokuapp.com/'
            target='_blank'
            rel='noreferrer'
          >
            LINK TO SITE
          </Button>
        </div>
      </div>

      <div className='cording_item'>
        <div className='cording_item_left'>
          <a
            href='https://sakodashiho.github.io/movie/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={`${process.env.PUBLIC_URL}/img/movie-image.jpg`} alt='' />
          </a>
        </div>
        <div className='cording_item_right'>
          <span class='bold'>映画告知サイト</span>
          <br />
          <p>
            2021年1月　制作
            <br />
            <br />
            jQueryプラグイン『pagePiling.js』を使用した、架空の映画告知サイト。動画背景にすることで、視覚的にすぐに映画の概要をイメージできるように意識した。
            <br />
            また、Googleフォントを初めて使用し、この経験を本サイト上でも使用した。
          </p>
          <Button
            variant='contained'
            color='primary'
            href='https://sakodashiho.github.io/movie/'
            target='_blank'
            rel='noreferrer'
          >
            LINK TO SITE
          </Button>
        </div>
      </div>
    </div>
  );
};
