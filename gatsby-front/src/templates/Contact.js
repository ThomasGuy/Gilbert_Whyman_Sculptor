import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaEnvelope } from 'react-icons/fa';
import SanityImageBox from '../components/SanityImageBox';
import { Page, Bio, Image } from '../styles';
import SEO from '../components/SEO';
import { TitleContext } from '../components/Layout';
import { CardRight, CardLeft, Links } from '../styles/contact';

const Contact = ({ pageContext }) => {
  const { setTitle } = useContext(TitleContext);
  const { name, biography, email, image, mug, links } = pageContext.contact;

  function makeId(slug, idx) {
    return `${slug}-${idx}`;
  }

  useEffect(() => {
    setTitle(name);
  }, [setTitle, name]);

  const firstName = name.split(' ')[0];

  const bioText = biography.map((bio, idx) => (
    <Bio className="bio" key={makeId('bio', idx)}>
      {bio}
    </Bio>
  ));

  return (
    <Page>
      <SEO title={`${name} - contact page`} />

      <section>
        <CardRight>
          {bioText[0]}
          <Image className="main-image" width="50rem">
            <SEO imageSrc={image.asset.url} />
            <SanityImageBox
              image={image}
              alt={name}
              title="Gilbert Whyman's workshop"
              name=""
            />
          </Image>
        </CardRight>
      </section>

      <section>
        {bioText[1]}
        <CardLeft>
          <Image className="mug-image" width="20rem">
            <SEO imageSrc={mug.asset.url} />
            <SanityImageBox name="" alt={name} title={name} image={mug} />
          </Image>

          {bioText[2]}
          {bioText[3]}
        </CardLeft>
        {bioText.length > 4 && bioText.slice(4)}
      </section>

      <section className="email">
        <p className="center">
          <span>Contact {name} by </span>
          <a href={`mailto:${email}`} style={{ color: '#ffc600' }}>
            Email&nbsp;&nbsp;&nbsp;
            <FaEnvelope />
          </a>
        </p>
      </section>

      <section>
        {links?.length > 0 && (
          <Links>
            <h2 id="comment">Check my other websites</h2>
            <br />
            <ul className="gridIt">
              {links.map((link, idx) => (
                <li key={makeId('link', idx)} className="middle">
                  <a href={`${link.url}`}>{link.name}</a>
                </li>
              ))}
            </ul>
          </Links>
        )}
      </section>
    </Page>
  );
};

export default Contact;

Contact.propTypes = {
  pageContext: PropTypes.object,
};
