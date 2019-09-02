<div id="keyboard-nav-info" tabindex="0">
    <div class="keyboard-nav-info-content">
        <div class="keyboard-nav-info-header">
            <h5 class="keyboard-nav-info-title">{{ trans('keyboard-navigation.keyboard-nav-title') }}</h5>
            <div class="keyboard-nav-info-body">
                <ul>
                    <li><a href="#" id="results-nav" onclick="focusResults()" tabindex="1">{{ trans('keyboard-navigation.focus-results') }}</a></li>
                    <li><a href="#" id="settings-nav" onclick="focusSettings()" tabindex="2">{{ trans('keyboard-navigation.focus-settings') }}</a></li>
                    <li><a href="#" id="site-nav" onclick="focusNavigation()" tabindex="3">{{ trans('keyboard-navigation.focus-navigation') }}</a></li>
                </ul>
                <p>{{ trans('keyboard-navigation.keyboard-nav-hint') }}</p>
            </div>
        </div>
    </div>
</div>