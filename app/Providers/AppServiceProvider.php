<?php

namespace App\Providers;

use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $appUrl = env('APP_URL');

        if (! empty($appUrl)) {
            $this->app['config']->set('app.url', rtrim($appUrl, '/'));
            URL::forceRootUrl(rtrim($appUrl, '/'));
        }

        if ($this->app->environment('production') || str_starts_with((string) $appUrl, 'https://')) {
            URL::forceScheme('https');
        }
    }
}
