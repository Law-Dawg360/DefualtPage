import { node } from '../../utility/node';

import './index.css';

const icon = {};

icon.all = {
  add: {
    path: 'M18.984 12.984h-6v6h-1.969v-6h-6v-1.969h6v-6h1.969v6h6v1.969z'
  },
  arrowBack: {
    path: 'M20.016 11.016v1.969h-12.188l5.578 5.625-1.406 1.406-8.016-8.016 8.016-8.016 1.406 1.406-5.578 5.625h12.188z'
  },
  arrowDownward: {
    path: 'M20.016 12l-8.016 8.016-8.016-8.016 1.453-1.406 5.578 5.578v-12.188h1.969v12.188l5.625-5.578z'
  },
  arrowForward: {
    path: 'M12 3.984l8.016 8.016-8.016 8.016-1.406-1.406 5.578-5.625h-12.188v-1.969h12.188l-5.578-5.625z'
  },
  arrowUpward: {
    path: 'M3.984 12l8.016-8.016 8.016 8.016-1.453 1.406-5.578-5.578v12.188h-1.969v-12.188l-5.625 5.578z'
  },
  check: {
    path: 'M9 16.172l10.594-10.594 1.406 1.406-12 12-5.578-5.578 1.406-1.406z'
  },
  cross: {
    path: 'M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z'
  },
  arrowKeyboardDown: {
    path: 'M7.406 7.828l4.594 4.594 4.594-4.594 1.406 1.406-6 6-6-6z'
  },
  arrowKeyboardLeft: {
    path: 'M15.422 16.078l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z'
  },
  arrowKeyboardRight: {
    path: 'M8.578 16.359l4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6z'
  },
  arrowKeyboardUp: {
    path: 'M7.406 15.422l-1.406-1.406 6-6 6 6-1.406 1.406-4.594-4.594z'
  },
  edit: {
    path: 'M20.719 7.031l-1.828 1.828-3.75-3.75 1.828-1.828c0.375-0.375 1.031-0.375 1.406 0l2.344 2.344c0.375 0.375 0.375 1.031 0 1.406zM3 17.25l11.063-11.063 3.75 3.75-11.063 11.063h-3.75v-3.75z'
  },
  moreHorizontal: {
    path: 'M12 9.984c1.078 0 2.016 0.938 2.016 2.016s-0.938 2.016-2.016 2.016-2.016-0.938-2.016-2.016 0.938-2.016 2.016-2.016zM18 9.984c1.078 0 2.016 0.938 2.016 2.016s-0.938 2.016-2.016 2.016-2.016-0.938-2.016-2.016 0.938-2.016 2.016-2.016zM6 9.984c1.078 0 2.016 0.938 2.016 2.016s-0.938 2.016-2.016 2.016-2.016-0.938-2.016-2.016 0.938-2.016 2.016-2.016z'
  },
  moreVertical: {
    path: 'M12 15.984c1.078 0 2.016 0.938 2.016 2.016s-0.938 2.016-2.016 2.016-2.016-0.938-2.016-2.016 0.938-2.016 2.016-2.016zM12 9.984c1.078 0 2.016 0.938 2.016 2.016s-0.938 2.016-2.016 2.016-2.016-0.938-2.016-2.016 0.938-2.016 2.016-2.016zM12 8.016c-1.078 0-2.016-0.938-2.016-2.016s0.938-2.016 2.016-2.016 2.016 0.938 2.016 2.016-0.938 2.016-2.016 2.016z'
  },
  redo: {
    path: 'M18.422 10.594l3.563-3.609v9h-9l3.656-3.609q-2.25-1.875-5.156-1.875-2.391 0-4.617 1.594t-2.977 3.891l-2.344-0.75q1.031-3.188 3.773-5.203t6.164-2.016q3.984 0 6.938 2.578z'
  },
  refresh: {
    path: 'M17.672 6.328l2.344-2.344v7.031h-7.031l3.234-3.234c-1.078-1.078-2.578-1.781-4.219-1.781-3.328 0-6 2.672-6 6s2.672 6 6 6c2.625 0 4.875-1.641 5.672-3.984h2.063c-0.891 3.469-3.984 6-7.734 6-4.406 0-7.969-3.609-7.969-8.016s3.563-8.016 7.969-8.016c2.203 0 4.219 0.891 5.672 2.344z'
  },
  remove: {
    path: 'M18.984 12.984h-13.969v-1.969h13.969v1.969z'
  },
  replay: {
    path: 'M12 5.016q3.328 0 5.672 2.344t2.344 5.625q0 3.328-2.367 5.672t-5.648 2.344-5.648-2.344-2.367-5.672h2.016q0 2.484 1.758 4.242t4.242 1.758 4.242-1.758 1.758-4.242-1.758-4.242-4.242-1.758v4.031l-5.016-5.016 5.016-5.016v4.031z'
  },
  settings: {
    path: 'M12 15.516c1.922 0 3.516-1.594 3.516-3.516s-1.594-3.516-3.516-3.516-3.516 1.594-3.516 3.516 1.594 3.516 3.516 3.516zM19.453 12.984l2.109 1.641c0.188 0.141 0.234 0.422 0.094 0.656l-2.016 3.469c-0.141 0.234-0.375 0.281-0.609 0.188l-2.484-0.984c-0.516 0.375-1.078 0.75-1.688 0.984l-0.375 2.625c-0.047 0.234-0.234 0.422-0.469 0.422h-4.031c-0.234 0-0.422-0.188-0.469-0.422l-0.375-2.625c-0.609-0.234-1.172-0.563-1.688-0.984l-2.484 0.984c-0.234 0.094-0.469 0.047-0.609-0.188l-2.016-3.469c-0.141-0.234-0.094-0.516 0.094-0.656l2.109-1.641c-0.047-0.328-0.047-0.656-0.047-0.984s0-0.656 0.047-0.984l-2.109-1.641c-0.188-0.141-0.234-0.422-0.094-0.656l2.016-3.469c0.141-0.234 0.375-0.281 0.609-0.188l2.484 0.984c0.516-0.375 1.078-0.75 1.688-0.984l0.375-2.625c0.047-0.234 0.234-0.422 0.469-0.422h4.031c0.234 0 0.422 0.188 0.469 0.422l0.375 2.625c0.609 0.234 1.172 0.563 1.688 0.984l2.484-0.984c0.234-0.094 0.469-0.047 0.609 0.188l2.016 3.469c0.141 0.234 0.094 0.516-0.094 0.656l-2.109 1.641c0.047 0.328 0.047 0.656 0.047 0.984s0 0.656-0.047 0.984z'
  },
  undo: {
    path: 'M12.516 8.016q3.422 0 6.141 2.016t3.797 5.203l-2.344 0.75q-0.797-2.438-2.883-3.961t-4.711-1.523q-2.906 0-5.156 1.875l3.656 3.609h-9v-9l3.563 3.609q2.953-2.578 6.938-2.578z'
  },
  unfoldLess: {
    path: 'M16.594 5.391l-4.594 4.594-4.594-4.594 1.406-1.406 3.188 3.188 3.188-3.188zM7.406 18.609l4.594-4.594 4.594 4.594-1.406 1.406-3.188-3.188-3.188 3.188z'
  },
  unfoldMore: {
    path: 'M12 18.188l3.188-3.188 1.406 1.406-4.594 4.594-4.594-4.594 1.406-1.406zM12 5.813l-3.188 3.188-1.406-1.406 4.594-4.594 4.594 4.594-1.406 1.406z'
  },
  coffee: {
    path: 'M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z'
  },
  drag: {
    path: 'M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
  },
  bookmark: {
    path: 'M17 3H7C5.9 3 5.01 3.9 5.01 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3Z'
  },
  addBookmark: {
    path: 'M21 7H19V9H17V7H15V5H17V3H19V5H21V7ZM19 21L12 18L5 21V5C5 3.9 5.9 3 7 3H14C13.37 3.84 13 4.87 13 6C13 8.76 15.24 11 18 11C18.34 11 18.68 10.97 19 10.9V21Z'
  },
  group: {
    path: 'M5 5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5ZM19 7H5V9H19V7Z',
    fill: 'evenodd',
    clip: 'evenodd'
  },
  addGroup: {
    path: 'M5 5H13.9996C13.5629 5.58141 13.25 6.26112 13.1 7H5V9H13.1C13.5633 11.2822 15.581 13 18 13C19.1256 13 20.1643 12.6281 21 12.0004V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5Z M19 9H21V7H19V5H17V7H15V9H17V11H19V9Z'
  },
  info: {
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'
  },
  warning: {
    path: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z'
  },
  propagate: {
    path: 'M5.54 8.46L2 12L5.54 15.54L7.3 13.77L5.54 12L7.3 10.23L5.54 8.46ZM12 18.46L10.23 16.7L8.46 18.46L12 22L15.54 18.46L13.77 16.7L12 18.46ZM18.46 8.46L16.7 10.23L18.46 12L16.7 13.77L18.46 15.54L22 12L18.46 8.46ZM8.46 5.54L10.23 7.3L12 5.54L13.77 7.3L15.54 5.54L12 2L8.46 5.54Z M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z'
  },
  random: {
    path: 'M10.59 9.17L5.41 4L4 5.41L9.17 10.58L10.59 9.17ZM14.5 4L16.54 6.04L4 18.59L5.41 20L17.96 7.46L20 9.5V4H14.5ZM14.83 13.41L13.42 14.82L16.55 17.95L14.5 20H20V14.5L17.96 16.54L14.83 13.41V13.41Z'
  },
  openAll: {
    path: 'M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z'
  },
  globe: {
    path: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z'
  }
};

icon.render = (name) => {

  const iconElement = node('span|class:icon');

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  svg.setAttribute('version', '1.1');

  svg.setAttribute('viewBox', '0 0 24 24');

  svg.setAttribute('width', '24');

  svg.setAttribute('height', '24');

  svg.setAttribute('fill', 'currentColor');

  if (icon.all[name].fill) {
    svg.setAttribute('clip-rule', icon.all[name].clip);
  }

  if (icon.all[name].fill) {
    svg.setAttribute('fill-rule', icon.all[name].fill);
  }

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

  path.setAttribute('d', icon.all[name].path);

  svg.appendChild(path);

  iconElement.appendChild(svg);

  return iconElement;

};

export { icon };
