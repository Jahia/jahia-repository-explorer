import React from 'react';
import {registry, IframeRenderer} from '@jahia/ui-extender';
import REConstants from './RepositoryExplorer.constants';
import RepositoryExplorer from './RepositoryExplorer';

registry.add('primary-nav-item', 'repositoryexplorerNavGroup', {
    targets: ['nav-root-top:6'],
    render: () => <RepositoryExplorer/>
});

registry.add('route', 'repositoryexplorer', {
    targets: ['nav-root-top'],
    path: REConstants.ROUTE,
    defaultPath: REConstants.ROUTE,
    render: () => <IframeRenderer url={`${window.contextJsParameters.contextPath}/engines/manager.jsp?conf=repositoryexplorer-anthracite&lang=${window.contextJsParameters.locale}`}/>
});
