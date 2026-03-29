/* ═══════════════════════════════════════════════════════════════════
   KARGO MONTACARGAS — COMBINED THEME JS
   Source files:
   - kargo_theme_main.js (view 2237 — QWeb bootstrap)
   - kargo_numeric_guard.js (ir.asset ID 10)
   ═══════════════════════════════════════════════════════════════════ */

/* === MAIN THEME JS (from view 2237) === */
        /* ═══ KARGO MOBILE NAV v3.0 ═══ */
        (function() {
            'use strict';
            
            function isMobile() {
                return window.innerWidth &lt;= 1024;
            }
            
            /* ── 1. HOME BUTTON IN NAVBAR ─────────────── */
            function createNavbarHomeBtn() {
                if (document.getElementById('kargo-nav-home')) return;
                var navbar = document.querySelector('.o_main_navbar');
                if (!navbar) return;
                
                var btn = document.createElement('a');
                btn.id = 'kargo-nav-home';
                btn.href = '/odoo';
                btn.setAttribute('aria-label', 'Inicio');
                btn.innerHTML = '&lt;svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"&gt;&lt;path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/&gt;&lt;polyline points="9 22 9 12 15 12 15 22"/&gt;&lt;/svg&gt;';
                
                var brand = navbar.querySelector('.o_menu_brand');
                if (brand) {
                    brand.parentNode.insertBefore(btn, brand);
                } else {
                    var toggle = navbar.querySelector('.o_menu_toggle');
                    if (toggle) toggle.parentNode.insertBefore(btn, toggle.nextSibling);
                }
            }
            
            /* ── 2. FLOATING HOME BUTTON (FAB) ─────────── */
            function createHomeFAB() {
                if (document.getElementById('kargo-home-fab')) return;
                var fab = document.createElement('a');
                fab.id = 'kargo-home-fab';
                fab.href = '/odoo';
                fab.setAttribute('aria-label', 'Ir al inicio');
                fab.innerHTML = '&lt;svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"&gt;&lt;path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/&gt;&lt;polyline points="9 22 9 12 15 12 15 22"/&gt;&lt;/svg&gt;';
                document.body.appendChild(fab);
            }
            
            /* ── 3. SIDEBAR HOME LINK ──────────────────── */
            function injectSidebarHome() {
                var content = document.querySelector('.o_burger_menu_content');
                if (!content || content.querySelector('#kargo-sidebar-home-link')) return;
                var link = document.createElement('a');
                link.id = 'kargo-sidebar-home-link';
                link.href = '/odoo';
                link.className = 'kargo-sidebar-home';
                link.innerHTML = '&lt;svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:12px;flex-shrink:0"&gt;&lt;path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/&gt;&lt;polyline points="9 22 9 12 15 12 15 22"/&gt;&lt;/svg&gt;Ir al Inicio';
                var first = content.firstElementChild;
                if (first) content.insertBefore(link, first);
                else content.appendChild(link);
            }
            
            /* ── 4. MODULE TITLE BAR (below navbar) ────── */
            function updateModuleTitle() {
                if (!isMobile()) {
                    var existing = document.getElementById('kargo-module-title');
                    if (existing) existing.style.display = 'none';
                    return;
                }
                
                var brand = document.querySelector('.o_menu_brand');
                var navbar = document.querySelector('.o_main_navbar');
                if (!navbar) return;
                
                var brandText = brand ? brand.textContent.trim() : '';
                var isHome = !!document.querySelector('.o_home_menu');
                
                var bar = document.getElementById('kargo-module-title');
                
                if (!brandText || isHome) {
                    if (bar) bar.style.display = 'none';
                    return;
                }
                
                if (!bar) {
                    bar = document.createElement('div');
                    bar.id = 'kargo-module-title';
                    navbar.parentNode.insertBefore(bar, navbar.nextSibling);
                }
                
                bar.innerHTML = '&lt;span class="kmt-name"&gt;' + brandText + '&lt;/span&gt;';
                bar.style.display = 'flex';
            }
            
            /* ── 5. HIDE BRAND + FIX CONTROL PANEL (JS) ── */
            function fixMobileLayout() {
                if (!isMobile()) return;
                
                /* Force hide brand text in navbar */
                var brand = document.querySelector('.o_menu_brand');
                if (brand) {
                    brand.style.setProperty('display', 'none', 'important');
                    brand.style.setProperty('width', '0', 'important');
                    brand.style.setProperty('max-width', '0', 'important');
                    brand.style.setProperty('overflow', 'hidden', 'important');
                    brand.style.setProperty('opacity', '0', 'important');
                }
                
                /* Fix control panel: merge top rows into single line */
                var cpTop = document.querySelector('.o_cp_top');
                if (cpTop) {
                    cpTop.style.setProperty('display', 'flex', 'important');
                    cpTop.style.setProperty('flex-wrap', 'nowrap', 'important');
                    cpTop.style.setProperty('align-items', 'center', 'important');
                    cpTop.style.setProperty('gap', '4px', 'important');
                }
                
                var cpTopLeft = document.querySelector('.o_cp_top_left');
                if (cpTopLeft) {
                    cpTopLeft.style.setProperty('display', 'flex', 'important');
                    cpTopLeft.style.setProperty('flex-wrap', 'nowrap', 'important');
                    cpTopLeft.style.setProperty('align-items', 'center', 'important');
                    cpTopLeft.style.setProperty('gap', '4px', 'important');
                    cpTopLeft.style.setProperty('flex-shrink', '0', 'important');
                }
                
                var cpTopRight = document.querySelector('.o_cp_top_right');
                if (cpTopRight) {
                    cpTopRight.style.setProperty('display', 'flex', 'important');
                    cpTopRight.style.setProperty('flex-wrap', 'nowrap', 'important');
                    cpTopRight.style.setProperty('align-items', 'center', 'important');
                    cpTopRight.style.setProperty('gap', '4px', 'important');
                    cpTopRight.style.setProperty('margin-left', 'auto', 'important');
                }
                
                /* Fix the bottom row too */
                var cpBottom = document.querySelector('.o_cp_bottom');
                if (cpBottom) {
                    cpBottom.style.setProperty('display', 'flex', 'important');
                    cpBottom.style.setProperty('flex-wrap', 'nowrap', 'important');
                    cpBottom.style.setProperty('align-items', 'center', 'important');
                    cpBottom.style.setProperty('gap', '4px', 'important');
                }
                
                var cpBottomLeft = document.querySelector('.o_cp_bottom_left');
                if (cpBottomLeft) {
                    cpBottomLeft.style.setProperty('display', 'flex', 'important');
                    cpBottomLeft.style.setProperty('flex-wrap', 'nowrap', 'important');
                    cpBottomLeft.style.setProperty('align-items', 'center', 'important');
                    cpBottomLeft.style.setProperty('gap', '4px', 'important');
                }
                
                var cpBottomRight = document.querySelector('.o_cp_bottom_right');
                if (cpBottomRight) {
                    cpBottomRight.style.setProperty('display', 'flex', 'important');
                    cpBottomRight.style.setProperty('flex-wrap', 'nowrap', 'important');
                    cpBottomRight.style.setProperty('align-items', 'center', 'important');
                    cpBottomRight.style.setProperty('gap', '4px', 'important');
                    cpBottomRight.style.setProperty('margin-left', 'auto', 'important');
                }
                
                /* Make all CP buttons compact squares */
                var cpBtns = document.querySelectorAll('.o_control_panel .btn:not(.btn-primary)');
                for (var i = 0; i &lt; cpBtns.length; i++) {
                    cpBtns[i].style.setProperty('min-height', '40px', 'important');
                    cpBtns[i].style.setProperty('min-width', '40px', 'important');
                    cpBtns[i].style.setProperty('max-height', '40px', 'important');
                    cpBtns[i].style.setProperty('padding', '0 8px', 'important');
                }
            }
            
            /* ── 6. OBSERVER ──────────────────────────── */
            var obs = new MutationObserver(function(muts) {
                for (var i = 0; i &lt; muts.length; i++) {
                    var added = muts[i].addedNodes;
                    for (var j = 0; j &lt; added.length; j++) {
                        var n = added[j];
                        if (n.nodeType === 1) {
                            if (n.classList.contains('o_burger_menu') ||
                                n.classList.contains('o_burger_menu_content') ||
                                (n.querySelector &amp;&amp; n.querySelector('.o_burger_menu_content'))) {
                                setTimeout(injectSidebarHome, 80);
                            }
                            /* Re-fix layout when new views load */
                            if (n.classList.contains('o_action') ||
                                n.classList.contains('o_control_panel') ||
                                (n.querySelector &amp;&amp; n.querySelector('.o_control_panel'))) {
                                setTimeout(fixMobileLayout, 100);
                                setTimeout(updateModuleTitle, 100);
                            }
                        }
                    }
                }
            });
            
            /* ── 7. VISIBILITY ────────────────────────── */
            function updateVisibility() {
                var fab = document.getElementById('kargo-home-fab');
                var navBtn = document.getElementById('kargo-nav-home');
                var isHome = !!document.querySelector('.o_home_menu');
                
                if (fab) fab.style.display = (isHome || !isMobile()) ? 'none' : 'flex';
                if (navBtn) navBtn.style.display = isHome ? 'none' : 'flex';
            }
            
            /* ── 8. INIT ──────────────────────────────── */
            function init() {
                createNavbarHomeBtn();
                if (isMobile()) createHomeFAB();
                updateVisibility();
                fixMobileLayout();
                updateModuleTitle();
                obs.observe(document.body, { childList: true, subtree: true });
                setInterval(function() {
                    updateVisibility();
                    fixMobileLayout();
                    updateModuleTitle();
                }, 2000);
            }
            
            if (document.readyState === 'complete') {
                setTimeout(init, 400);
            } else {
                window.addEventListener('load', function() { setTimeout(init, 400); });
            }
            
            window.addEventListener('resize', function() { setTimeout(init, 200); });
            window.addEventListener('hashchange', function() { 
                setTimeout(function() {
                    fixMobileLayout();
                    updateVisibility();
                    updateModuleTitle();
                }, 500);
            });
        })();

/* === NUMERIC INPUT GUARD (from attachment 1149) === */

/** @odoo-module **/
/**
 * Kargo Montacargas: Bloquear tecleo no-numérico + validación de rango
 */
(function () {
    'use strict';

    var FIELD_RULES = {
        'x_numero_kargo': { maxlen: 3, min: 1, max: 999, msg: 'El N° Interno Kargo debe ser entre 1 y 999' },
        'x_anio_fabricacion': { maxlen: 4, min: 1950, max: new Date().getFullYear() + 2, msg: 'El Año de Fabricación debe ser entre 1950 y ' + (new Date().getFullYear() + 2) },
        'x_renta_duracion_meses': { maxlen: 3, min: 1, max: 999, msg: 'La duración debe ser entre 1 y 999 meses' }
    };

    function getFieldName(el) {
        var parent = el.closest('.o_field_widget[name]');
        return parent ? parent.getAttribute('name') : null;
    }

    function showFieldError(el, msg) {
        // Borde rojo + tooltip
        el.style.outline = '2px solid #e74c3c';
        el.style.boxShadow = '0 0 6px rgba(231,76,60,0.4)';
        // Crear/actualizar tooltip
        var parent = el.parentElement;
        var tip = parent.querySelector('.kargo-field-error');
        if (!tip) {
            tip = document.createElement('div');
            tip.className = 'kargo-field-error';
            tip.style.cssText = 'color:#e74c3c;font-size:0.78em;font-weight:600;margin-top:2px;padding:2px 6px;background:rgba(231,76,60,0.08);border-radius:4px;';
            parent.appendChild(tip);
        }
        tip.textContent = '⚠️ ' + msg;
    }

    function clearFieldError(el) {
        el.style.outline = '';
        el.style.boxShadow = '';
        var parent = el.parentElement;
        var tip = parent ? parent.querySelector('.kargo-field-error') : null;
        if (tip) tip.remove();
    }

    function blockNonNumeric(el, allowDot) {
        if (!el || el.dataset.kargoGuard) return;
        el.dataset.kargoGuard = '1';

        var fieldName = getFieldName(el);
        var rule = fieldName ? FIELD_RULES[fieldName] : null;
        var maxlen = rule ? rule.maxlen : null;

        el.setAttribute('inputmode', allowDot ? 'decimal' : 'numeric');

        el.addEventListener('keydown', function(e) {
            var k = e.keyCode || e.which;
            if ([8, 9, 13, 27, 46].indexOf(k) !== -1) return;
            if (k >= 35 && k <= 40) return;
            if ((e.ctrlKey || e.metaKey) && [65, 67, 86, 88, 90].indexOf(k) !== -1) return;

            if (allowDot) {
                if ((k === 190 || k === 110) && this.value.indexOf('.') === -1) return;
                if (k === 188 && this.value.indexOf('.') === -1) {
                    e.preventDefault();
                    var pos = this.selectionStart;
                    this.value = this.value.slice(0, pos) + '.' + this.value.slice(pos);
                    this.setSelectionRange(pos + 1, pos + 1);
                    this.dispatchEvent(new Event('input', {bubbles: true}));
                    return;
                }
                if ((k === 189 || k === 109) && this.selectionStart === 0 && this.value.indexOf('-') === -1) return;
            }

            var isDigit = (k >= 48 && k <= 57 && !e.shiftKey) || (k >= 96 && k <= 105);
            if (!isDigit) { e.preventDefault(); return; }

            if (maxlen) {
                var digits = this.value.replace(/[^0-9]/g, '');
                var selLen = Math.abs(this.selectionEnd - this.selectionStart);
                if (digits.length >= maxlen && selLen === 0) { e.preventDefault(); }
            }
        });

        el.addEventListener('input', function() {
            var regex = allowDot ? /[^0-9.\-]/g : /[^0-9]/g;
            var clean = this.value.replace(regex, '');
            if (allowDot) {
                var parts = clean.split('.');
                if (parts.length > 2) clean = parts[0] + '.' + parts.slice(1).join('');
                if (clean.lastIndexOf('-') > 0) {
                    var hasMinus = clean.charAt(0) === '-';
                    clean = clean.replace(/-/g, '');
                    if (hasMinus) clean = '-' + clean;
                }
            }
            if (maxlen && !allowDot) clean = clean.slice(0, maxlen);
            if (this.value !== clean) {
                var pos = this.selectionStart - (this.value.length - clean.length);
                this.value = clean;
                this.setSelectionRange(Math.max(0, pos), Math.max(0, pos));
            }
            // Limpiar error mientras edita
            clearFieldError(this);
        });

        // Validar rango al salir del campo (blur)
        if (rule) {
            el.addEventListener('change', function() { validateRange(this, rule); });
            el.addEventListener('blur', function() { validateRange(this, rule); });
        }
    }

    function validateRange(el, rule) {
        var val = parseInt(el.value, 10);
        if (!el.value || el.value === '' || isNaN(val)) {
            clearFieldError(el);
            return;
        }
        if (val < rule.min || val > rule.max) {
            showFieldError(el, rule.msg);
            // Seleccionar el valor para que corrija fácil
            el.select();
        } else {
            clearFieldError(el);
        }
    }

    function setupGuards() {
        document.querySelectorAll('.o_field_integer input[type="text"]').forEach(function(el) {
            blockNonNumeric(el, false);
        });
        document.querySelectorAll('.o_field_float input[type="text"], .o_field_monetary input[type="text"]').forEach(function(el) {
            blockNonNumeric(el, true);
        });
    }

    var debounce = null;
    var observer = new MutationObserver(function() {
        clearTimeout(debounce);
        debounce = setTimeout(setupGuards, 150);
    });

    function init() {
        setupGuards();
        if (document.body) {
            observer.observe(document.body, { childList: true, subtree: true });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
