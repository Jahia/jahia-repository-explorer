import React from 'react';
import {registry} from '@jahia/ui-extender';
import RepositoryExplorer from './RepositoryExplorer';

export const registerRoute = () => {
    registry.add('primary-nav-item', 'repositoryexplorerNavGroup', {
        targets: ['nav-root-top:6'],
        requiredPermission: 'repositoryExplorer',
        requiredPermissionPath: '/',
        render: () => <RepositoryExplorer/>
    });
};
