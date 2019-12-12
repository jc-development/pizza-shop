const isActive = ({ linkName, activeLinkRedux }) => linkName === activeLinkRedux ? 'active' : null;
export default isActive;
