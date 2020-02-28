import React from 'react';

export const DisplayFormikState = props =>
  <div style={{ margin: '1rem 0', background: '#f6f8fa', padding: '.5rem' }}>
    <strong>Injected Formik props (the form's state)</strong>
    <div style={{}}>
      <code>touched:</code> {JSON.stringify(props.touched, null, 2)}
    </div>
    <div>
      <code>errors:</code> {JSON.stringify(props.errors, null, 2)}
    </div>
    <div>
      <code>values:</code> {JSON.stringify(props.values, null, 2)}
    </div>
    <div>
      <code>isSubmitting:</code> {JSON.stringify(props.isSubmitting, null, 2)}
    </div>
  </div>;

export const MoreResources = props =>
  <div>
    <hr style={{ margin: '3rem 0' }} />
    <h3>More Examples</h3>
    <ul>
      <li>
        <a
          href="https://codesandbox.io/s/q8yRqQMp"
          target="_blank"
          rel="noopener"
        >
          Synchronous validation
        </a>
      </li>
      <li>
        <a
          href="https://codesandbox.io/s/qJR4ykJk"
          target="_blank"
          rel="noopener"
        >
          Building your own custom inputs
        </a>
      </li>
      <li>
        <a
          href="https://codesandbox.io/s/jRzE53pqR"
          target="_blank"
          rel="noopener"
        >
          3rd-party input components: React-select
        </a>
      </li>
      <li>
        <a
          href="https://codesandbox.io/s/QW1rqjBLl"
          target="_blank"
          rel="noopener"
        >
          3rd-party input components: Draft.js
        </a>
      </li>
      <li>
        <a
          href="https://codesandbox.io/s/pgD4DLypy"
          target="_blank"
          rel="noopener"
        >
          Accessing Lifecyle Methods (resetting a form externally)
        </a>
      </li>
    </ul>
    <h3 style={{ marginTop: '1rem' }}>Additional Resources</h3>
    <ul>
      <li>
        <a
          href="https://github.com/jaredpalmer/formik"
          target="_blank"
          rel="noopener"
        >
          GitHub Repo
        </a>
      </li>
      <li>
        <a
          href="https://github.com/jaredpalmer/formik/issues"
          target="_blank"
          rel="noopener"
        >
          Issues
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/jaredpalmer"
          target="_blank"
          rel="noopener"
        >
          Twitter (@jaredpalmer)
        </a>
      </li>
    </ul>
  </div>;
