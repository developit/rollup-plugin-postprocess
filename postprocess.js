import MagicString from 'magic-string';

let currentToken;
const replacer = (str, index) => currentToken[index];

export default function postprocess(allReplacements) {
	return {
		name: 'postprocess',
		transformBundle(code, { sourceMap, format }) {
			let str = new MagicString(code);
			let replacements = typeof allReplacements==='function' ? allReplacements({ code, sourceMap, format }) : allReplacements;

			for (let i=0; i<replacements.length; i++) {
				let [find, replace=''] = replacements[i];
				if (typeof find==='string') find = new RegExp(find);
				if (!find.global) {
					find = new RegExp(find.source, 'g' + String(find).split('/').pop());
				}

				let token;
				while (token=find.exec(code)) {
					let value;
					if (typeof replace==='function') {
						value = replace.apply(null, token);
						if (value==null) value = '';
					}
					else {
						currentToken = token;
						value = replace.replace(/\$(\d+)/, replacer);
					}
					str.overwrite(token.index, token.index + token[0].length, value);
				}
			}

			return {
				code: str.toString(),
				map: sourceMap===false ? null : str.generateMap({ hires: true })
			};
		}
	};
}