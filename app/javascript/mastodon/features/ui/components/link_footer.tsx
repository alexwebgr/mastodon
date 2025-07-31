import { FormattedMessage } from 'react-intl';

import { Link } from 'react-router-dom';

import { version, termsOfServiceEnabled } from 'mastodon/initial_state';

const DividingCircle: React.FC = () => <span aria-hidden>{' · '}</span>;

export const LinkFooter: React.FC<{
  multiColumn: boolean;
}> = ({ multiColumn }) => {
  return (
    <div className='link-footer'>
      <p>
        <Link
          to='/privacy-policy'
          target={multiColumn ? '_blank' : undefined}
          rel='privacy-policy'
        >
          <FormattedMessage
            id='footer.privacy_policy'
            defaultMessage='Privacy policy'
          />
        </Link>
        {termsOfServiceEnabled && (
          <>
            <DividingCircle />
            <Link
              to='/terms-of-service'
              target={multiColumn ? '_blank' : undefined}
              rel='terms-of-service'
            >
              <FormattedMessage
                id='footer.terms_of_service'
                defaultMessage='Terms of service'
              />
            </Link>
          </>
        )}
      </p>

      <p>
        <strong>Mastodon</strong>:{' '}
        <a href='https://joinmastodon.org/apps' target='_blank' rel='noopener'>
          <FormattedMessage id='footer.get_app' defaultMessage='Get the app' />
        </a>
        <DividingCircle />
        <Link to='/keyboard-shortcuts'>
          <FormattedMessage
            id='footer.keyboard_shortcuts'
            defaultMessage='Keyboard shortcuts'
          />
        </Link>
        <DividingCircle />
        <span className='version'>v{version}</span>
      </p>
    </div>
  );
};
