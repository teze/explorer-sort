import * as vscode from 'vscode';

type SortType = 'default' | 'name' | 'type' | 'size' | 'modified' | 'created';

export function activate(context: vscode.ExtensionContext) {
    console.log('Explorer Sort 插件已激活');

    // 在激活时恢复上次的排序设置
    restoreSortOrder();

    // 注册显示排序菜单命令
    const showSortMenuCommand = vscode.commands.registerCommand('explorer-sort.showSortMenu', async () => {
        await showSortMenu();
    });

    // 注册各种排序命令
    const sortByNameCommand = vscode.commands.registerCommand('explorer-sort.sortByName', () => {
        applySortOrder('name');
    });

    const sortByTypeCommand = vscode.commands.registerCommand('explorer-sort.sortByType', () => {
        applySortOrder('type');
    });

    const sortBySizeCommand = vscode.commands.registerCommand('explorer-sort.sortBySize', () => {
        applySortOrder('size');
    });

    const sortByModifiedCommand = vscode.commands.registerCommand('explorer-sort.sortByModified', () => {
        applySortOrder('modified');
    });

    const sortByCreatedCommand = vscode.commands.registerCommand('explorer-sort.sortByCreated', () => {
        applySortOrder('created');
    });

    const sortDefaultCommand = vscode.commands.registerCommand('explorer-sort.sortDefault', () => {
        applySortOrder('default');
    });

    context.subscriptions.push(
        showSortMenuCommand,
        sortByNameCommand,
        sortByTypeCommand,
        sortBySizeCommand,
        sortByModifiedCommand,
        sortByCreatedCommand,
        sortDefaultCommand
    );
}

async function showSortMenu() {
    const config = vscode.workspace.getConfiguration('explorerSort');
    const currentSort = config.get<SortType>('currentSortType', 'default');

    const sortOptions = [
        {
            label: '$(symbol-string) 默认排序',
            description: currentSort === 'default' ? '✓ 当前' : '',
            sortType: 'default' as SortType
        },
        {
            label: '$(symbol-text) 按名称排序',
            description: currentSort === 'name' ? '✓ 当前' : '',
            sortType: 'name' as SortType
        },
        {
            label: '$(symbol-file) 按类型排序',
            description: currentSort === 'type' ? '✓ 当前' : '',
            sortType: 'type' as SortType
        },
        {
            label: '$(database) 按大小排序',
            description: currentSort === 'size' ? '✓ 当前' : '',
            sortType: 'size' as SortType
        },
        {
            label: '$(history) 按修改时间排序',
            description: currentSort === 'modified' ? '✓ 当前' : '',
            sortType: 'modified' as SortType
        },
        {
            label: '$(clock) 按创建时间排序',
            description: currentSort === 'created' ? '✓ 当前' : '',
            sortType: 'created' as SortType
        }
    ];

    const selected = await vscode.window.showQuickPick(sortOptions, {
        placeHolder: '选择文件排序方式',
        matchOnDescription: true
    });

    if (selected) {
        applySortOrder(selected.sortType);
    }
}

async function applySortOrder(sortType: SortType) {
    try {
        const config = vscode.workspace.getConfiguration('explorer');
        const explorerConfig = vscode.workspace.getConfiguration('explorerSort');

        // 映射到 VS Code 的 explorer.sortOrder 配置
        let vscodeSort: string;

        switch (sortType) {
            case 'name':
                vscodeSort = 'alphabetical';
                break;
            case 'type':
                vscodeSort = 'type';
                break;
            case 'modified':
                vscodeSort = 'modified';
                break;
            case 'size':
                // VS Code 原生不支持按大小排序，使用 filesFirst
                vscodeSort = 'filesFirst';
                vscode.window.showInformationMessage('注意: VS Code 原生不支持按大小排序，已切换到文件优先模式');
                break;
            case 'created':
                // VS Code 原生不支持按创建时间排序，使用 modified
                vscodeSort = 'modified';
                vscode.window.showInformationMessage('注意: VS Code 原生不支持按创建时间排序，已使用修改时间排序');
                break;
            case 'default':
            default:
                vscodeSort = 'default';
                break;
        }

        // 更新 VS Code 的排序配置
        await config.update('sortOrder', vscodeSort, vscode.ConfigurationTarget.Workspace);

        // 保存当前排序类型到插件配置
        await explorerConfig.update('currentSortType', sortType, vscode.ConfigurationTarget.Workspace);

        // 显示成功消息
        const sortNames: Record<SortType, string> = {
            'default': '默认排序',
            'name': '按名称排序',
            'type': '按类型排序',
            'size': '按大小排序',
            'modified': '按修改时间排序',
            'created': '按创建时间排序'
        };

        vscode.window.showInformationMessage(`已切换到: ${sortNames[sortType]}`);

    } catch (error) {
        vscode.window.showErrorMessage(`排序失败: ${error}`);
        console.error('排序错误:', error);

        // 错误时恢复默认排序
        try {
            const config = vscode.workspace.getConfiguration('explorer');
            await config.update('sortOrder', 'default', vscode.ConfigurationTarget.Workspace);
        } catch (fallbackError) {
            console.error('恢复默认排序失败:', fallbackError);
        }
    }
}

function restoreSortOrder() {
    try {
        const config = vscode.workspace.getConfiguration('explorerSort');
        const savedSort = config.get<SortType>('currentSortType', 'default');

        // 在激活后 500ms 应用保存的排序
        setTimeout(() => {
            applySortOrder(savedSort);
        }, 500);

    } catch (error) {
        console.error('恢复排序设置失败:', error);
    }
}

export function deactivate() {
    console.log('Explorer Sort 插件已停用');
}
