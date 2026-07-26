(TeX-add-style-hook
 "default_packages"
 (lambda ()
   (add-to-list 'LaTeX-verbatim-environments-local "lstlisting")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "lstinline")
   (add-to-list 'LaTeX-verbatim-macros-with-delims-local "lstinline")
   (TeX-run-style-hooks
    "latex2e"
    "article"
    "art10"
    "amsmath"
    "amsthm"
    "amssymb"
    "amsfonts"
    "color"
    "listings"
    "mathtools"
    "multirow"
    "hhline")
   (LaTeX-add-amsthm-newtheorems
    "theorem"
    "definition"))
 :latex)

