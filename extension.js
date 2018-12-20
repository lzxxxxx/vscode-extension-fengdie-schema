const vscode = require('vscode');
const DATATYPES = require('./dataTypes');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    function provideCompletionItems(document, position, token, context) {
        return DATATYPES.map(dep => {
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