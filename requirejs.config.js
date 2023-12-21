const baseUrl = "/js";

require.config({
	baseUrl: baseUrl,
	paths: {
		"jquery.slim": `${baseUrl}/lib/jquery-3.7.1.slim.min`,
		"sweetalert2": `${baseUrl}/lib/sweetalert2-11.10.1.min`,
	},
});