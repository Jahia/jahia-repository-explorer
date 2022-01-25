import {registry} from '@jahia/ui-extender';
import register from './RepositoryExplorer/register';

export default function () {
    registry.add('callback', 'repositoryExplorer', {
        targets: ['jahiaApp-init:10'],
        callback: register
    });
}
