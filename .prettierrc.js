module.exports = {
	/**
	 * @description Include parentheses around a sole arrow function parameter.
	 * @default "always"
	 * @type {'always' | 'avoid'}
	 * @argument
	 *    - always: Always include parens. Example: `(x) => x`
	 *    - avoid: Omit parens when possible. Example: `x => x`
	 */
	arrowParens: 'always',
	/**
	 * @description Put > of opening tags on the last line instead of on a new line.
	 * @default false
	 * @type {boolean}
	 */
	bracketSameLine: false,
	/**
	 * @description Print spaces between brackets.
	 * @default true
	 * @type {boolean}
	 */
	bracketSpacing: true,
	/**
	 * @description
	 * Print (to stderr) where a cursor at the given position would move to after formatting.
	 * This option cannot be used with --range-start and --range-end.
	 * @default -1
	 * @type {number}
	 */
	cursorOffset: -1,
	/**
	 * @description Control how Prettier formats quoted code embedded in the file.
	 * @default "auto"
	 * @type {('auto' | 'off')}
	 *    - auto: Format embedded code if Prettier can automatically identify it.
	 *    - off: Never automatically format embedded code.
	 */
	embeddedLanguageFormatting: 'auto',
	/**
	 * @description Which end of line characters to apply.
	 * @default "lf"
	 * @type {('lf' | 'crlf' | 'cr' | 'auto')}
	 *    - lf: Line Feed only (\\n), common on Linux and macOS as well as inside git repos
	 *    - crlf: Carriage Return + Line Feed characters (\\r\\n), common on Windows
	 *    - cr: Carriage Return character only (\\r), used very rarely
	 *    - auto: Maintain existing\n(mixed values within one file are normalised by looking at what's used after the first line)
	 */
	endOfLine: 'lf',
	/**
	 * @description Specify the input filepath. This will be used to do parser inference.
	 * @type {string}
	 */
	// filepath: '',
	/**
	 * @description How to handle whitespaces in HTML.
	 * @default 'css''
	 * @type {('css' | 'strict' | 'ignore')}
	 *    - css: Respect the default value of CSS display property.
	 *    - strict: Whitespaces are considered sensitive.
	 *    - ignore: Whitespaces are considered insensitive.
	 */
	htmlWhitespaceSensitivity: 'css',
	/**
	 * @description Insert @format pragma into file's first docblock comment.
	 * @default false
	 * @type {boolean}
	 */
	insertPragma: false,
	/**
	 * @description Use single quotes in JSX.
	 * @default false
	 * @type {boolean}
	 */
	jsxSingleQuote: false,
	/**
	 * @description Which parser to use.
	 * @default ''
	 * @type {(
	 *    "flow" | "babel" | "espree" | "meriyah" | "graphql" |
	 *    "markdown" | "mdx" | "vue" | "yaml" | "glimmer" |
	 *    "html" | "angular" | "lwc" | "css" | "less" |
	 *    "scss" | "json" | "json5" | "typescript" | "babel-flow" | "babel-ts" | "json-stringify"
	 *    string
	 * )}
	 */
	// parser: "",
	/**
	 * @description Custom directory that contains prettier plugins in node_modules subdirectory.
	 * Overrides default behavior when plugins are searched relatively to the location of Prettier.\nMultiple values are accepted.
	 * @default []
	 * @param {string[]}
	 */
	pluginSearchDirs: [],
	/**
	 * @description Add a plugin. Multiple plugins can be passed as separate `--plugin`s.
	 * @default []
	 * @type {string[]}
	 */
	plugins: [],
	/**
	 * @description The line length where Prettier will try wrap.
	 * @default 80
	 * @type {number}
	 */
	printWidth: 100,
	/**
	 * @description How to wrap prose.
	 * @default "preserve"
	 * @type {('always' | 'never' | 'preserve')}
	 *    - always Wrap prose if it exceeds the print width.
	 *    - never Do not wrap prose.
	 *    - preserve Wrap prose as-is.
	 */
	proseWrap: 'preserve',
	/**
	 * @description Change when properties in objects are quoted.
	 * @default "as-needed"
	 * @type {('as-needed' | 'consistent' | 'preserve' )}
	 *    - as-needed: Only add quotes around object properties where required.
	 *    - consistent: If at least one property in an object requires quotes, quote all properties.
	 *    - preserve: Respect the input use of quotes in object properties.
	 */
	quoteProps: 'as-needed',
	/**
	 * @description Format code ending at a given character offset (exclusive).
	 * The range will extend forwards to the end of the selected statement.
	 * This option cannot be used with --cursor-offset.
	 * @default null
	 * @type {number | null}
	 */
	rangeEnd: null,
	/**
	 * @description Format code starting at a given character offset.
	 * The range will extend backwards to the start of the first line containing the selected statement.
	 * This option cannot be used with --cursor-offset.
	 * @param {number}
	 */
	rangeStart: 0,
	/**
	 * @description Require either '@prettier' or '@format' to be present in the file's first docblock comment
	 * in order for it to be formatted.
	 * @default false
	 * @type {boolean}
	 */
	requirePragma: false,
	/**
	 * @description Print semicolons.
	 * @default true
	 * @type {boolean}
	 */
	semi: true,
	/**
	 * @description Use single quotes instead of double quotes.
	 * @default false
	 * @type {boolean}
	 */
	singleQuote: true,
	/**
	 * @description Number of spaces per indentation level.
	 * @default 2
	 * @type {number}
	 */
	tabWidth: 4,
	/**
	 * @description Print trailing commas wherever possible when multi-line.
	 * @default 'es5'
	 * @type {('es5' | 'none' | 'all')}
	 *    - es5: Trailing commas where valid in ES5 (objects, arrays, etc.)
	 *    - none: description": "No trailing commas.
	 *    - all: Trailing commas wherever possible (including function arguments).
	 */
	trailingComma: 'all',
	/**
	 * @description Indent with tabs instead of spaces.
	 * @default false
	 * @type {boolean}
	 */
	useTabs: true,
	/**
	 * @description Indent script and style tags in Vue files.
	 * @default false
	 * @type {boolean}
	 */
	vueIndentScriptAndStyle: false,
};
