/*
Copyright 2019 The Tekton Authors
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InlineNotification } from 'carbon-components-react';
import Modal from '../SecretsModal';
import DeleteModal from '../../components/SecretsDeleteModal';
import Table from '../../components/SecretsTable';
import {
  fetchSecrets,
  deleteSecret,
  clearNotification
} from '../../actions/secrets';
import {
  getSecrets,
  getSecretsErrorMessage,
  isFetchingSecrets
} from '../../reducers';

export /* istanbul ignore next */ class Secrets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openNewSecret: false,
      openDeleteSecret: false,
      toBeDeleted: ''
    };
  }

  componentDidMount() {
    this.props.fetchSecrets();
  }

  handleNewSecretClick = () => {
    this.setState(function(prevState) {
      return {
        openNewSecret: !prevState.openNewSecret
      };
    });
  };

  handleDeleteSecretToggle = () => {
    this.setState({
      openDeleteSecret: false,
      toBeDeleted: ''
    });
  };

  handleDeleteSecretClick = e => {
    let secretName;
    if (e.target.nodeName === 'svg' || e.target.nodeName === 'path')
      secretName = e.currentTarget.id;
    else secretName = e.target.id;
    this.setState({
      openDeleteSecret: true,
      toBeDeleted: secretName
    });
  };

  delete = () => {
    this.props.deleteSecret(this.state.toBeDeleted);
    this.handleDeleteSecretToggle();
  };

  render() {
    const { secrets, loading, error } = this.props;
    const { openNewSecret, toBeDeleted, openDeleteSecret } = this.state;

    if (error !== null) setTimeout(this.props.clearNotification, 5000);

    return (
      <>
        {error !== null ? (
          <InlineNotification
            kind="error"
            title="Error:"
            subtitle={error}
            iconDescription="Clear Notification"
            className="notificationComponent"
            data-testid="errorNotificationComponent"
          />
        ) : (
          ''
        )}
        <Table
          handleNew={this.handleNewSecretClick}
          handleDelete={this.handleDeleteSecretClick}
          loading={loading}
          secrets={secrets}
        />
        {openNewSecret ? (
          <Modal open={openNewSecret} handleNew={this.handleNewSecretClick} />
        ) : (
          ''
        )}
        {openDeleteSecret ? (
          <DeleteModal
            open={openDeleteSecret}
            handleClick={this.handleDeleteSecretToggle}
            handleDelete={this.delete}
            id={toBeDeleted}
          />
        ) : (
          ''
        )}
      </>
    );
  }
}

Secrets.defaultProps = {
  secrets: [
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '0'
    },
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '1'
    },
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '2'
    },
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '3'
    },
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '4'
    },
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '5'
    },
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '6'
    },
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '7'
    },
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '8'
    },
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '9'
    },
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '10'
    },
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '11'
    },
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '12'
    },
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '13'
    },
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '14'
    },
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '15'
    },
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '16'
    },
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '17'
    },
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '18'
    },
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '19'
    },
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '20'
    },
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '21'
    },
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '22'
    },
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '23'
    },
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '24'
    },
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '25'
    },
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '26'
    },
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '27'
    },
    {
      annotations: { 'tekton.dev/git-0': 'https://github.ibm.com' },
      name: 'github-repo-access-secret',
      uid: '28'
    }
  ]
};

function mapStateToProps(state) {
  return {
    error: getSecretsErrorMessage(state),
    loading: isFetchingSecrets(state),
    secrets: getSecrets(state)
  };
}

const mapDispatchToProps = {
  fetchSecrets,
  deleteSecret,
  clearNotification
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Secrets);
