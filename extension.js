// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "schema" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    // let disposable = vscode.commands.registerCommand('extension.sayHello', function () {
    //     // The code you place here will be executed every time your command is executed

    //     // Display a message box to the user
    //     vscode.window.showInformationMessage('Hello World!');
    // });
    function provideCompletionItems(document, position, token, context) {
        // const line        = document.lineAt(position);
        // const projectPath = util.getProjectPath(document);
    
        // 只截取到光标位置为止，防止一些特殊情况
        // const lineText = line.text.substring(0, position.character);
        // 简单匹配，只要当前光标前的字符串为`this.dependencies.`都自动带出所有的依赖
        let dataTypes = ['Number','Object','String'];
        return dataTypes.map(dep => {
            // vscode.CompletionItemKind 表示提示的类型
            return new vscode.CompletionItem(dep, vscode.CompletionItemKind.Field);
        })
    }
    let autoComplete = vscode.languages.registerCompletionItemProvider('schema',{
        provideCompletionItems
    });

    context.subscriptions.push(autoComplete);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;