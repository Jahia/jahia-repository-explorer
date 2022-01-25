import React from 'react';
import {registry, IframeRenderer} from '@jahia/ui-extender';
import REConstants from './RepositoryExplorer.constants';

export const registerMainRoute = () => {
    registry.add('route', 'repositoryexplorer', {
        targets: ['main'],
        path: REConstants.ROUTE,
        defaultPath: REConstants.ROUTE,
        requiredPermission: 'repositoryExplorer',
        requiredPermissionPath: '/',
        render: () => <IframeRenderer url={`${window.contextJsParameters.contextPath}/engines/manager.jsp?conf=repositoryexplorer&lang=${window.contextJsParameters.lang}&jahia.ui.theme=default${window.location.search.replace('?', '&')}`}/>
    });
};
