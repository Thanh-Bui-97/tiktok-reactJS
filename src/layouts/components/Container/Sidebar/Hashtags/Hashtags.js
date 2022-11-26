import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Hashtags.module.scss';
import { HashtagIcon, MusicIcon } from '~/components/Icons';
import { Link } from 'react-router-dom';
import config from '~/config';
const cx = classNames.bind(style);

function Hashtags({ hashtagList = [] }) {
  return (
    <section className={cx('wrapper')}>
      <h4 className={cx('label')}>Discover</h4>
      <ul className={cx('hashtag--list')}>
        {hashtagList.map((hashtag, index) => {
          if (hashtag.discription === 'music') {
            return (
              <li className={cx('hashtag--item')} key={index}>
                <Link to={config.routes.music}>
                  <span>
                    <MusicIcon />
                  </span>
                  <p className={cx('hashtag--contents')}>{hashtag.contents}</p>
                </Link>
              </li>
            );
          } else {
            return (
              <li className={cx('hashtag--item')} key={index}>
                <Link to={config.routes.tag}>
                  <span>
                    <HashtagIcon />
                  </span>
                  <p className={cx('hashtag--contents')}>{hashtag.contents}</p>
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </section>
  );
}

// set rules for props of components
Hashtags.propTypes = {
  hashtagList: PropTypes.array.isRequired,
};

export default Hashtags;
