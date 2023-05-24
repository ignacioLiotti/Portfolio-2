import React from 'react';

const HandPointer = (props) => <svg {...props} height="16" width="16" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
	<path d="M12.2669 5.87988C11.7213 4.98953 10.5704 4.72166 9.70014 5.26447C9.20123 4.6135 8.36664 4.38078 7.63392 4.62744V1.88281C7.63392 0.844625 6.7968 0 5.76787 0C4.73893 0 3.90178 0.844625 3.90178 1.88281V7.56725C3.26622 7.13997 2.41497 7.13319 1.76462 7.61325C0.934751 8.22591 0.753127 9.397 1.35425 10.2359L4.92521 15.2203C5.27509 15.7085 5.8404 16 6.43749 16H12.241C13.1071 16 13.8608 15.3971 14.0581 14.546L14.9509 10.6944C14.9835 10.5538 15 10.4099 15 10.2656V7.54684C15 6.12919 13.4996 5.22459 12.2669 5.87988V5.87988ZM3.56553 8.61213L4.44859 9.84459C4.4486 9.88396 4.45791 9.92277 4.47577 9.95786C4.49362 9.99295 4.51951 10.0233 4.55132 10.0465C4.58314 10.0697 4.61999 10.0851 4.65886 10.0913C4.69773 10.0976 4.73752 10.0945 4.77501 10.0825C4.81249 10.0705 4.8466 10.0497 4.87456 10.022C4.90252 9.99429 4.92353 9.96036 4.93589 9.92298C4.94825 9.8856 4.9516 9.84583 4.94568 9.80691C4.93976 9.76799 4.92472 9.73101 4.90181 9.699V1.88281C4.90181 0.715625 6.63393 0.71375 6.63393 1.88281V7.54688C6.63393 7.61318 6.66027 7.67677 6.70715 7.72365C6.75403 7.77054 6.81762 7.79688 6.88393 7.79688H7.10718C7.17348 7.79688 7.23707 7.77054 7.28395 7.72365C7.33084 7.67677 7.35717 7.61318 7.35717 7.54688V6.41406C7.35717 5.24688 9.08933 5.245 9.08933 6.41406V7.54688C9.08933 7.61318 9.11567 7.67677 9.16255 7.72365C9.20944 7.77054 9.27302 7.79688 9.33933 7.79688H9.56248C9.62879 7.79688 9.69238 7.77054 9.73926 7.72365C9.78614 7.67677 9.81248 7.61318 9.81248 7.54688V6.86719C9.81248 5.69997 11.5446 5.69819 11.5446 6.86719V7.54688C11.5446 7.61318 11.571 7.67677 11.6179 7.72365C11.6647 7.77054 11.7283 7.79688 11.7946 7.79688H12.0179C12.0842 7.79688 12.1477 7.77054 12.1946 7.72365C12.2415 7.67677 12.2679 7.61318 12.2679 7.54688C12.2679 6.37969 14 6.37781 14 7.54688V10.2656C14 10.3339 13.9922 10.4022 13.9768 10.4686L13.0839 14.3202C12.9911 14.7205 12.6445 15 12.2411 15H6.43749C6.16208 15 5.90058 14.8646 5.73808 14.6379L2.16675 9.6535C1.47259 8.68462 2.91053 7.69803 3.56553 8.61213V8.61213ZM6.6339 12.5312V9.8125C6.6339 9.7462 6.66023 9.68261 6.70712 9.63572C6.754 9.58884 6.81759 9.5625 6.8839 9.5625H7.10714C7.17345 9.5625 7.23704 9.58884 7.28392 9.63572C7.33081 9.68261 7.35714 9.7462 7.35714 9.8125V12.5312C7.35714 12.5976 7.33081 12.6611 7.28392 12.708C7.23704 12.7549 7.17345 12.7812 7.10714 12.7812H6.8839C6.81759 12.7812 6.754 12.7549 6.70712 12.708C6.66023 12.6611 6.6339 12.5976 6.6339 12.5312ZM9.08927 12.5312V9.8125C9.08927 9.7462 9.1156 9.68261 9.16249 9.63572C9.20937 9.58884 9.27296 9.5625 9.33926 9.5625H9.56248C9.62879 9.5625 9.69238 9.58884 9.73926 9.63572C9.78614 9.68261 9.81248 9.7462 9.81248 9.8125V12.5312C9.81248 12.5976 9.78614 12.6611 9.73926 12.708C9.69238 12.7549 9.62879 12.7812 9.56248 12.7812H9.33926C9.27296 12.7812 9.20937 12.7549 9.16249 12.708C9.1156 12.6611 9.08927 12.5976 9.08927 12.5312V12.5312ZM11.5446 12.5312V9.8125C11.5446 9.7462 11.571 9.68261 11.6179 9.63572C11.6647 9.58884 11.7283 9.5625 11.7946 9.5625H12.0179C12.0842 9.5625 12.1477 9.58884 12.1946 9.63572C12.2415 9.68261 12.2679 9.7462 12.2679 9.8125V12.5312C12.2679 12.5976 12.2415 12.6611 12.1946 12.708C12.1477 12.7549 12.0842 12.7812 12.0179 12.7812H11.7946C11.7283 12.7812 11.6647 12.7549 11.6179 12.708C11.571 12.6611 11.5446 12.5976 11.5446 12.5312Z" fill="currentColor"/>
</svg>;

export default HandPointer;
