export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","assets/.DS_Store","assets/goal.png","assets/selection.png","assets/training.png","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CkMyTb67.js","app":"_app/immutable/entry/app.BesJ4TO-.js","imports":["_app/immutable/entry/start.CkMyTb67.js","_app/immutable/chunks/entry.DuZLWf7e.js","_app/immutable/chunks/scheduler.mo3GjxGz.js","_app/immutable/chunks/index.aL_LTlol.js","_app/immutable/chunks/paths.CjK1nHRq.js","_app/immutable/entry/app.BesJ4TO-.js","_app/immutable/chunks/scheduler.mo3GjxGz.js","_app/immutable/chunks/index._rPf_Sl4.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
