package org.bihr.crc;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;

import android.app.Activity;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.content.res.AssetManager;
import android.net.Uri;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class welcome extends Activity {

	private WebView mWebView;
	private static final String HOME_URL = "file:///android_asset/index.html";

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_welcome);

		// to run some installation tasks
		SharedPreferences prefs = PreferenceManager
				.getDefaultSharedPreferences(this);
		if (!prefs.getBoolean("firstTime", false)) {
			// copy all assets required to sd storage
			copyAsset("pdf");

			// set pref to true
			SharedPreferences.Editor editor = prefs.edit();
			editor.putBoolean("firstTime", true);
			editor.commit();
		}

		mWebView = (WebView) findViewById(R.id.activity_main_webview);

		// Makes to link interactions to the current webview
		mWebView.setWebViewClient(new Callback());

		// This will enable Javascript
		WebSettings webSettings = mWebView.getSettings();
		webSettings.setJavaScriptEnabled(true);

		mWebView.loadUrl(HOME_URL);
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.welcome, menu);
		return true;
	}

	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
		// Handle action bar item clicks here. The action bar will
		// automatically handle clicks on the Home/Up button, so long
		// as you specify a parent activity in AndroidManifest.xml.
		int id = item.getItemId();
		if (id == R.id.action_settings) {
			return true;
		}
		return super.onOptionsItemSelected(item);
	}

	public void showPdf(String path) {

		File file = new File(getExternalFilesDir(null), path);
		PackageManager packageManager = getPackageManager();
		Intent testIntent = new Intent(Intent.ACTION_VIEW);
		testIntent.setType("application/pdf");
		List list = packageManager.queryIntentActivities(testIntent,
				PackageManager.MATCH_DEFAULT_ONLY);
		Intent intent = new Intent();
		intent.setAction(Intent.ACTION_VIEW);
		Uri uri = Uri.fromFile(file);
		intent.setDataAndType(uri, "application/pdf");
		startActivity(intent);

	}

	private void copyAsset(String path) {
		AssetManager manager = getAssets();

		// If we have a directory, we make it and recurse. If a file, we copy
		// its
		// contents.
		try {
			String[] contents = manager.list(path);
			// The documentation suggests that list throws an IOException, but
			// doesn't
			// say under what conditions. It'd be nice if it did so when the
			// path was
			// to a file. That doesn't appear to be the case. If the returned
			// array is
			// null or has 0 length, we assume the path is to a file. This means
			// empty
			// directories will get turned into files.
			if (contents == null || contents.length == 0)
				throw new IOException();

			// Make the directory.
			File dir = new File(getExternalFilesDir(null), path);
			dir.mkdirs();
			Log.v("contents1: ", "" + contents.length);
			// Recurse on the contents.
			for (String entry : contents) {
				copyAsset(path + "/" + entry);
			}
		} catch (IOException e) {
			copyFileAsset(path);
		}
	}

	/**
	 * Copy the asset file specified by path to app's data directory. Assumes
	 * parent directories have already been created.
	 * 
	 * @param path
	 *            Path to asset, relative to app's assets directory.
	 */
	private void copyFileAsset(String path) {
		File file = new File(getExternalFilesDir(null), path);
		try {
			InputStream in = getAssets().open(path);
			OutputStream out = new FileOutputStream(file);
			byte[] buffer = new byte[1024];
			int read = in.read(buffer);
			while (read != -1) {
				out.write(buffer, 0, read);
				read = in.read(buffer);
			}
			out.close();
			in.close();
		} catch (IOException e) {
			Log.e("", e.toString());
		}
	}

	private class Callback extends WebViewClient {
		@Override
		public boolean shouldOverrideUrlLoading(WebView view, String url) {
			Log.v("callback: ", "clicked " + url);
			// rest to the home url
			view.loadUrl(HOME_URL);

			Uri url_obj = Uri.parse(url);
			if (url_obj.getScheme().equals("file")) {
				if (url_obj.getPath().contains(".pdf")) {
					showPdf(url_obj.getPath().replaceAll("/android_asset/", ""));
				}
			} else if (url_obj.getScheme().equals("https")
					|| url_obj.getScheme().equals("http")) {
				Intent browserIntent = new Intent(Intent.ACTION_VIEW, url_obj);
				startActivity(browserIntent);
			}

			return (false);
		}
	}
}
