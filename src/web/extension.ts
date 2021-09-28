// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';


async function openEditor() {
	try {
		const docURI = vscode.Uri.parse(`${'vscode-test-web'}:/mount/extension.ts`);
		const doc = await vscode.workspace.openTextDocument(docURI);
		await vscode.window.showTextDocument(doc);
	} catch (e) {
		console.log(e);
	}
}

export async function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "ext-web-issue-133947" is now active in the web extension host!');

	await openEditor();

	let disposable = vscode.commands.registerCommand('ext-web-issue-133947.helloWorld', async () => {
		await openEditor();
		vscode.window.showInformationMessage('Hello World from ext-web-issue-133947 in a web extension host!');
	});

	context.subscriptions.push(disposable);
}