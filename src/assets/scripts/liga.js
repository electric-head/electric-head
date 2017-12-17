/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'home': '&#xe900;',
            'house': '&#xe900;',
            'image': '&#xe90d;',
            'picture': '&#xe90d;',
            'images': '&#xe90e;',
            'pictures': '&#xe90e;',
            'file_text': '&#xe926;',
            'textfile': '&#xe926;',
            'file_picture': '&#xe927;',
            'folder': '&#xe92f;',
            'directory': '&#xe92f;',
            'folder_open': '&#xe930;',
            'directory_open': '&#xe930;',
            'pricetag': '&#xe935;',
            'pricetags': '&#xe936;',
            'barcode': '&#xe937;',
            'qrcode': '&#xe938;',
            'qr_code': '&#xe938;',
            'help': '&#xe941;',
            'support': '&#xe941;',
            'map': '&#xe94b;',
            'map_outline': '&#xe94c;',
            'hw_pc': '&#xe95e;',
            'desktop': '&#xe95e;',
            'hw_laptop': '&#xe95f;',
            'hw_mobile': '&#xe960;',
            'cell': '&#xe960;',
            'hw_tablet': '&#xe963;',
            'tablet': '&#xe963;',
            'user': '&#xe971;',
            'users': '&#xe972;',
            'group': '&#xe972;',
            'user_add': '&#xe973;',
            'user_remove': '&#xe974;',
            'user_check': '&#xe975;',
            'user_ok': '&#xe975;',
            'user_tie': '&#xe976;',
            'business': '&#xe976;',
            'wrench': '&#xe991;',
            'settings1': '&#xe991;',
            'settings_hor': '&#xe992;',
            'eq_01': '&#xe992;',
            'settings_vert': '&#xe993;',
            'eq_02': '&#xe993;',
            'gear': '&#xe994;',
            'options1': '&#xe994;',
            'gears': '&#xe995;',
            'options2': '&#xe995;',
            'gift': '&#xe99f;',
            'birthday': '&#xe99f;',
            'hot': '&#xe9a9;',
            'fire': '&#xe9a9;',
            'flag': '&#xe9cc;',
            'report': '&#xe9cc;',
            'star_empty': '&#xe9d7;',
            'rate_empty': '&#xe9d7;',
            'star_half': '&#xe9d8;',
            'rate_half': '&#xe9d8;',
            'star_full': '&#xe9d9;',
            'rate_full': '&#xe9d9;',
            'point_up': '&#xea03;',
            'point_right': '&#xea04;',
            'point_down': '&#xea05;',
            'point_left': '&#xea06;',
            'enter': '&#xea13;',
            'signin': '&#xea13;',
            'exit': '&#xea14;',
            'signout': '&#xea14;',
            'av_pause': '&#xea1d;',
            'av_stop': '&#xea1e;',
            'av_backward': '&#xea1f;',
            'av_forward': '&#xea20;',
            'av_first': '&#xea21;',
            'av_last': '&#xea22;',
            'av_previous': '&#xea23;',
            'av_next': '&#xea24;',
            'av_eject': '&#xea25;',
            'av_vol_high': '&#xea26;',
            'av_vol_up': '&#xea26;',
            'av_vol_med': '&#xea27;',
            'av_vol_down': '&#xea28;',
            'av_vol_low': '&#xea28;',
            'av_vol': '&#xea29;',
            'av_vol_mute': '&#xea2a;',
            'av_vol_increase': '&#xea2b;',
            'av_vol_decrease': '&#xea2c;',
            'av_loop': '&#xea2d;',
            'av_repeat': '&#xea2d;',
            'av_infinite': '&#xea2f;',
            'infinity': '&#xea2f;',
            'av_shuffle': '&#xea30;',
            'arrow_up_left': '&#xea39;',
            'arrow_up': '&#xea3a;',
            'arrow_up_right': '&#xea3b;',
            'arrow_right': '&#xea3c;',
            'arrow_down_right': '&#xea3d;',
            'arrow_down': '&#xea3e;',
            'arrow_down_left': '&#xea3f;',
            'arrow_left': '&#xea40;',
            'circle_up': '&#xea41;',
            'circle_right': '&#xea42;',
            'circle_down': '&#xea43;',
            'circle_left': '&#xea44;',
            'sort_alpha_asc': '&#xea48;',
            'sort_alpha_desc': '&#xea49;',
            'sort_num_asc': '&#xea4a;',
            'sort_num_desc': '&#xea4b;',
            'sort_amount_asc': '&#xea4c;',
            'sort_amount_desc': '&#xea4d;',
            'share': '&#xea82;',
            'amazon': '&#xea87;',
            'google': '&#xea88;',
            'google_circle': '&#xea8a;',
            'google_plus': '&#xea8b;',
            'google_plus_square': '&#xea8c;',
            'google_plus_circle': '&#xea8d;',
            'google_hangouts': '&#xea8e;',
            'google_drive': '&#xea8f;',
            'facebook': '&#xea90;',
            'fb': '&#xea90;',
            'facebook_square': '&#xea91;',
            'instagram': '&#xea92;',
            'whatsapp': '&#xea93;',
            'twitter': '&#xea96;',
            'steam_square': '&#xeaad;',
            'dropbox': '&#xeaae;',
            'onedrive': '&#xeaaf;',
            'yahoo': '&#xeabb;',
            'yahoo_square': '&#xeabc;',
            'soundcloud': '&#xeac3;',
            'soundcloud_square': '&#xeac4;',
            'skype': '&#xeac5;',
            'reddit': '&#xeac6;',
            'linkedin_square': '&#xeac9;',
            'linkedin': '&#xeaca;',
            'pinterest': '&#xead1;',
            'pinterest_outline': '&#xead2;',
            'paypal': '&#xead8;',
            'browser_chrome': '&#xead9;',
            'chrome': '&#xead9;',
            'browser_firefox': '&#xeada;',
            'firefox': '&#xeada;',
            'browser_edge': '&#xeadc;',
            'edge': '&#xeadc;',
            'browser_safari': '&#xeadd;',
            'safari': '&#xeadd;',
            'browser_opera': '&#xeade;',
            'opera': '&#xeade;',
            'file_pdf': '&#xeadf;',
            'pdf': '&#xeadf;',
            'html': '&#xeae4;',
            'html_outline': '&#xeae5;',
            'css': '&#xeae6;',
            'git': '&#xeae7;',
            'cart': '&#xe901;',
            'globe': '&#xe902;',
            'earth': '&#xe902;',
            'ampersand': '&#xe904;',
            'amp': '&#xe904;',
            'checkmark': '&#xe905;',
            'ok': '&#xe905;',
            'calendar': '&#xe907;',
            'graph_line': '&#xe909;',
            'graph_bar': '&#xe90a;',
            'done_all': '&#xe877;',
            'menu': '&#xe5d2;',
            'more_horiz': '&#xe5d3;',
            'more_vert': '&#xe5d4;',
            'news': '&#xe009;',
            'write': '&#xe032;',
            'pencil': '&#xe032;',
            'search': '&#xe037;',
            'profile_male': '&#xe040;',
            'profile_female': '&#xe041;',
            'quote_right': '&#xe915;',
            'quote_left': '&#xe916;',
            'link_chain': '&#xe919;',
            'link_side': '&#xe91a;',
            'camera': '&#xe903;',
            'film': '&#xe91b;',
            'movie1': '&#xe91b;',
            'film2': '&#xe91c;',
            'movie2': '&#xe91c;',
            'mic_01': '&#xe91d;',
            'mic_02': '&#xe91f;',
            'mic_03': '&#xe920;',
            'movies': '&#xe923;',
            'entertainment': '&#xe923;',
            'outbox': '&#xe924;',
            'download': '&#xe924;',
            'inbox': '&#xe925;',
            'upload': '&#xe925;',
            'minus': '&#xe906;',
            'delete01': '&#xe906;',
            'warn': '&#xe928;',
            'warning': '&#xe928;',
            'delete02': '&#xe908;',
            'cancel': '&#xe908;',
            'cloud': '&#xe929;',
            'cloud_up': '&#xe92a;',
            'cloud_down': '&#xe92b;',
            'folder01': '&#xe92c;',
            'alarm': '&#xe92d;',
            'alert': '&#xe92d;',
            'alarm_no': '&#xe92e;',
            'alert_no': '&#xe92e;',
            'phone': '&#xe931;',
            'sale': '&#xe932;',
            'trash': '&#xe90b;',
            'vote': '&#xe933;',
            'school': '&#xe934;',
            'education': '&#xe934;',
            'award_medal': '&#xe93d;',
            'award_ribbon': '&#xe93e;',
            'megaphone': '&#xe93f;',
            'award_box': '&#xe940;',
            'box': '&#xe940;',
            'tools': '&#xe942;',
            'settings': '&#xe942;',
            'screwdriver': '&#xe943;',
            'fullscreen': '&#xe94a;',
            'resize': '&#xe94a;',
            'pencil1': '&#xe94d;',
            'pen': '&#xe94e;',
            'pin': '&#xe94f;',
            'pushpin': '&#xe94f;',
            'pin_slant': '&#xe950;',
            'pushpin_slant': '&#xe950;',
            'edit': '&#xe951;',
            'write1': '&#xe951;',
            'id_01': '&#xe90c;',
            'credentials_01': '&#xe90c;',
            'id_clip': '&#xe90f;',
            'credentials_clip': '&#xe90f;',
            'id_02': '&#xe910;',
            'credentials_02': '&#xe910;',
            'reply': '&#xe952;',
            'forward': '&#xe953;',
            'bookmark': '&#xe911;',
            'book_closed': '&#xe911;',
            'mail': '&#xe954;',
            'envelope': '&#xe954;',
            'ribbon': '&#xe955;',
            'awareness': '&#xe955;',
            'info': '&#xe956;',
            'info_circle': '&#xe957;',
            'paper_plane': '&#xe958;',
            'plane': '&#xe958;',
            'book_open': '&#xe912;',
            'barc': '&#xe959;',
            'expand': '&#xe95a;',
            'collapse': '&#xe95b;',
            'badge': '&#xe95c;',
            'police': '&#xe95c;',
            'cone': '&#xe95d;',
            'construction': '&#xe95d;',
            'clipboard': '&#xe962;',
            'music_note': '&#xf001;',
            'envelope_02': '&#xf003;',
            'mail_02': '&#xf003;',
            'heart_full': '&#xf004;',
            'tag': '&#xf02b;',
            'tags': '&#xf02c;',
            'eye_visible': '&#xf06e;',
            'eye_open': '&#xf06e;',
            'eye_invisible': '&#xf070;',
            'eye_slash': '&#xf070;',
            'comment': '&#xf075;',
            'twitter_square': '&#xf081;',
            'comments': '&#xf086;',
            'heart_empty': '&#xf08a;',
            'award_trophy': '&#xf091;',
            'trophy': '&#xf091;',
            'comment_outline': '&#xf0e5;',
            'comments_outline': '&#xf0e6;',
            'terminal': '&#xf120;',
            'code': '&#xf121;',
            'html_02': '&#xf13b;',
            'css_02': '&#xf13c;',
            'thumbs_up': '&#xf164;',
            'upvote': '&#xf164;',
            'thumbs_down': '&#xf165;',
            'downvote': '&#xf165;',
            'youtube': '&#xf167;',
            'youtube_square': '&#xf16a;',
            'tumblr': '&#xf173;',
            'tumblr_square': '&#xf174;',
            'apple_logo': '&#xf179;',
            'windows': '&#xf17a;',
            'android': '&#xf17b;',
            'linux': '&#xf17c;',
            'reddit_circle': '&#xf1a1;',
            'translate': '&#xf1ab;',
            'language': '&#xf1ab;',
            'steam': '&#xf1b6;',
            'file_code': '&#xf1c9;',
            'git_square': '&#xf1d2;',
            'send': '&#xf1d8;',
            'send_outline': '&#xf1d9;',
            'copyright': '&#xf1f9;',
            'at': '&#xf1fa;',
            'email_02': '&#xf1fa;',
            'birthday_01': '&#xf1fd;',
            'cake': '&#xf1fd;',
            'invisible': '&#xf21b;',
            'anonymous': '&#xf21b;',
            'gender_female': '&#xf221;',
            'venus': '&#xf221;',
            'gender_male': '&#xf222;',
            'mars': '&#xf222;',
            'gender_nonbinary': '&#xf223;',
            'gender_intersex': '&#xf224;',
            'bigender': '&#xf224;',
            'gender_trans': '&#xf225;',
            'gender_lesbian': '&#xf226;',
            'gender_gay': '&#xf227;',
            'gender_hetero': '&#xf228;',
            'gender_trans_male': '&#xf229;',
            'gender_androgynous': '&#xf22a;',
            'gender_other': '&#xf22b;',
            'gender_neutral': '&#xf22c;',
            'gender_asexual': '&#xf22d;',
            'legal': '&#xf24e;',
            'scale': '&#xf24e;',
            'wikipedia': '&#xf266;',
            'wiki': '&#xf266;',
            'hat_feather': '&#xf2ae;',
            'poet': '&#xf2ae;',
            'imdb': '&#xf2d8;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/eh-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
