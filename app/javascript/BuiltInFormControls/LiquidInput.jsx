import React, { useState } from 'react';
import classNames from 'classnames';
import { useApolloClient } from 'react-apollo-hooks';

import CodeInput from './CodeInput';
import { PreviewLiquidQuery } from './previewQueries.gql';

function LiquidInput(props) {
  const [showingDocs, setShowingDocs] = useState(false);
  const [currentDocTab, setCurrentDocTab] = useState('convention');
  const client = useApolloClient();

  const docTabClicked = (event, tab) => {
    event.preventDefault();
    setCurrentDocTab(tab);
  };

  const getPreviewContent = async (liquid) => {
    const response = await client.query({
      query: PreviewLiquidQuery,
      variables: { liquid },
      fetchPolicy: 'no-cache',
    });

    return response.data.previewLiquid;
  };

  const renderDocs = () => {
    if (!showingDocs) {
      return null;
    }

    return (
      <>
        <div className="liquid-docs-browser d-flex flex-column align-items-stretch">
          <header className="bg-light border-top border-color-light d-flex align-items-stretch">
            <div className="flex-grow-1 pt-1">
              <ul className="nav nav-tabs pl-2 justify-content-center">
                <li className="nav-item">
                  { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    href="#"
                    className={classNames('nav-link', { active: currentDocTab === 'convention' })}
                    onClick={(e) => docTabClicked(e, 'convention')}
                  >
                    Convention-specific markup
                  </a>
                </li>
                <li className="nav-item">
                  { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    href="#"
                    className={classNames('nav-link', { active: currentDocTab === 'core' })}
                    onClick={(e) => docTabClicked(e, 'core')}
                  >
                    Core Liquid markup
                  </a>
                </li>
              </ul>
            </div>
            <div className="border-bottom border-color-light d-flex align-items-center">
              <button
                type="button"
                className="btn btn-link btn-sm mr-3 text-body"
                style={{ cursor: 'pointer' }}
                onClick={() => setShowingDocs(false)}
              >
                <i className="fa fa-close" title="Close" />
              </button>
            </div>
          </header>
          <iframe
            src={
              currentDocTab === 'convention'
                ? '/liquid_docs'
                : 'https://shopify.github.io/liquid/'
            }
            title="Liquid markup documentation"
            className="flex-grow-1 border-0"
          />
        </div>
        <div className="liquid-docs-spacer" />
      </>
    );
  };

  return (
    <CodeInput
      {...props}
      mode="liquid-html"
      getPreviewContent={getPreviewContent}
      extraNavControls={(
        <li className="flex-grow-1 d-flex justify-content-end">
          <div className="nav-item">
            <button
              type="button"
              className="btn btn-link nav-link py-0 px-2"
              onClick={(e) => { e.preventDefault(); setShowingDocs(true); }}
            >
              <i className="fa fa-question-circle" />
              {' '}
              Help
            </button>
          </div>
        </li>
      )}
    >
      {renderDocs()}
    </CodeInput>
  );
}

export default LiquidInput;
