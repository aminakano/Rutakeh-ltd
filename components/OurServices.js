import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faChalkboardTeacher, faGlobe, faUserFriends } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="services">
      <h3>Our services</h3>
      <ul className="services-list">
        <li>
          <FontAwesomeIcon icon={faLaptop} className="icon"/>
          <div>
            <h4>IT技術研修</h4>
            <p>
              Webシステム構築、プログラミング等、技術研修を実施しております。スキルチェンジや新入社員研修など、少人数から大規模まで実績がございます。
            </p>
          </div>
        </li>
        <li>
          <FontAwesomeIcon icon={faChalkboardTeacher} className="icon"/>
          <div>
            <h4>人材育成研修</h4>
            <p>
              ビジネスマナー、プレゼンテーションなど、ヒューマンスキル育成の研修を実施しております。
            </p>
          </div>
        </li>
        <li>
          <FontAwesomeIcon icon={faGlobe} className="icon"/>
          <div>
            <h4>海外留学</h4>
            <p>
              海外留学を検討している方、興味がある方、お気軽にご相談ください。英語圏への語学留学が専門ですが、その他の留学スタイルもご相談可能です。
            </p>
          </div>
        </li>
        <li>
          <FontAwesomeIcon icon={faUserFriends} className="icon"/>
          <div>
            <h4>コンサルテーション</h4>
            <p>
              Webサイト、Webシステムの構築について、Webマーケティングの実施によるビジネスチャンスをお考えの方、ご相談承ります。
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Services;
