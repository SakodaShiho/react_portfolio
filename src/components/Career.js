import React from "react";
import "../css/Career.css";
import Career1 from "../img/career1.png";
import Career2 from "../img/career2.png";
import Career3 from "../img/career3.png";
import Career4 from "../img/career4.png";

export const Career = (props) => {
  return (
    <div>
      <div>
        <h1 className="pageTitle">CAREER</h1>
        <hr />
      </div>
      <div className="career_container">
        <div className="card">
          <div className="career_left">
            <img src={Career4}></img>
          </div>

          <div className="career_right">
            <h2>2021年3月～　WEB制作会社でアルバイト</h2>
            <hr className="career_hr" />
            <p>
              関東に引っ越し、少しでもWEB業界のことを知るため、WEB制作会社でアルバイトを開始。
              <br />
              主に
              <br />
              ・飲食サイトのコーディング <br />
              ・ワイヤーフレーム作成 <br />
              ・コーディング修正 <br />
              ・制作案件のディレクション業務 <br />
              を担当。
              <br />
              <br />
              また、アルバイトをしながらReactを独学で学習。
            </p>
          </div>
        </div>

        <div className="card">
          <div className="career_left">
            <img src={Career3}></img>
          </div>

          <div className="career_right">
            <h2>2016年3月～2021年3月　ブライダル企業に就職</h2>
            <hr className="career_hr" />
            <span className="bold">◆2016年3月〜2017年3月</span>
            <p>
              提携の結婚式場へ常駐し、新郎新婦へ招待状などのペーパーアイテムや、引き出物などのギフトアイテムを営業、販売。
              <br />
              接客、事務作業が主で、新郎新婦とのお打合せや受発注業務、電話対応などを担当。
            </p>
            <br />
            <br />
            <span className="bold">◆2017年4月～</span>
            <p>本社に異動し、社内の業務見直しを担当。</p>
            <br />
            <br />
            <span class="bold2">・社内のマニュアル整備</span>
            <p>
              社内の全作業のマニュアルを作成し、必ずマニュアルを見て作業するよう徹底
              <br />
              これにより週1～2回程度は発生していた社内のミス・トラブル件数が、3ヶ月に1回発生する程度となり、大きな変化となった。
            </p>
            <br />
            <br />
            <span class="bold2">
              ・提携式場/取引先とのポータルサイトを、ウェブサイトビルダーを用いて制作
            </span>
            <p>
              これにより、1日30件ほどあった問合せ件数を週3件程度に削減することに成功。
            </p>
            <br />
            <br />
            <span class="bold2">・RPA(Robotic Process</span>
            <p>
              Automation)を導入、開発し、社内のルーチン業務をRPA化
              <br />
              これにより、週40時間程度の人件費削減に成功。
              <br />
              <br />
              ・社内ポータルサイトや自社の企業サイトの作成などを、ウェブサイトビルダーを用いて制作
              <br />
              <br />
              ・Shopifyを使用したWEBカタログを作成し、新郎新婦が見る紙媒体のギフトカタログを廃止
              <br />
              これによりお客様が見る用のギフトカタログのセッティング作業が不要となり、人件費の削減に成功。
              <br />
              また新郎新婦への負担も軽減され、紙カタログがないメーカーとの新しい取引も可能になったため、取扱い可能商品が大幅に増加。お客様に大変好評となり、ギフト売上の増加にも繋がった。
            </p>
            <br />
            <br />
            <span className="bold">◆2018年12月～</span>
            <p>
              これまでBtoBだった自社の取扱い商品をBtoCへ移行するべく、ECサイト開発を開始。
              <br />
              エンジニアの方とチームになり約2年間開発に携わる。
              <br />
              <br />
              ・Adobe XDを使用して、UI提案・プロトタイプ作成
              <br />
              ・Adobe illustratorを使用して、サイト内の特集画像などを作成
              <br />
              ・商品写真を自社で撮影、Adobe Photoshopを使用して画像編集
              <br />
              ・GoogleアナリティクスやGoogleサーチコンソールを用いたマーケティング
              <br />
              ・インスタグラム、Twitterを使用したSNSマーケティング
              <br />
              ・新規取引先開拓、営業 その他、 ・司会演者派遣会社/美容院経営会社
              <br />
              2社のコンサルティングに入り、社内ポータルサイトや公式サイトの制作、SNS運用を担当
              <br />
              ・上記2社コンサル先の業務フロー見直しや、PL(損益)管理を行う
            </p>
            <br />
            <br />
            <span className="bold">◆2020年10月～</span>
            <p>
              製菓・製パン業界を対象としたシングルテナント型ECサイトと、マルチテナント型ECサイトが開発できるウェブサービスを、マイクロサービスというアーキテクチャを採用して開発開始。
              <br />
              こちらでも主にAdobe XDを使用してUIの提案、プロトタイプ作成を担当。
            </p>
            <br />
            <br />
            <span className="bold">◆2021年3月　退職</span>
            <p>
              ECサイト制作を通してWEB業界に興味を持ち、独学で学習していたが、WEB業界への転職を目指して退職。
            </p>
          </div>
        </div>

        <div className="card">
          <div className="career_left">
            <img src={Career2}></img>
          </div>

          <div className="career_right">
            <h2>2015年4月～2016年3月　歯科医院へ就職</h2>
            <hr className="career_hr" />
            <p>
              兵庫県西宮市の歯科医院で、歯科助手として入社
              <br />
              約1年間歯学について学びながら、ブライダル業界への転職活動を行う。
            </p>
          </div>
        </div>

        <div className="card">
          <div className="career_left">
            <img src={Career1}></img>
          </div>

          <div className="career_right">
            <h2>～2015年3月 短期大学卒業</h2>
            <hr className="career_hr" />
            <p>
              2013年4月に大手前短期大学
              ライフデザイン総合学科に入学し、ブライダルについて学ぶ。
              <br />
              ブライダル業界への就職は成功せず、歯科医院に就職することを決め、2015年3月に卒業。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
