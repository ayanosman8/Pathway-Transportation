"use client";

export function MedicalTransportIllustration() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="mt-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#BFDBFE" />
          <stop offset="100%" stopColor="#EFF6FF" />
        </linearGradient>
      </defs>
      {/* Sky */}
      <rect width="200" height="200" fill="url(#mt-sky)" />
      {/* Clouds */}
      <g opacity="0.9">
        <ellipse cx="44" cy="32" rx="22" ry="10" fill="white" />
        <ellipse cx="60" cy="26" rx="16" ry="9" fill="white" />
        <ellipse cx="28" cy="29" rx="14" ry="8" fill="white" />
      </g>
      <g opacity="0.9">
        <ellipse cx="158" cy="40" rx="20" ry="9" fill="white" />
        <ellipse cx="173" cy="34" rx="14" ry="8" fill="white" />
      </g>
      {/* Road */}
      <rect x="0" y="150" width="200" height="50" fill="#9CA3AF" />
      <rect x="0" y="150" width="200" height="5" fill="#6B7280" />
      <rect x="8" y="170" width="28" height="5" fill="white" rx="2.5" opacity="0.8" />
      <rect x="86" y="170" width="28" height="5" fill="white" rx="2.5" opacity="0.8" />
      <rect x="164" y="170" width="28" height="5" fill="white" rx="2.5" opacity="0.8" />
      {/* Van shadow */}
      <ellipse cx="108" cy="153" rx="72" ry="6" fill="black" opacity="0.12" />
      {/* Van body */}
      <rect x="22" y="94" width="152" height="62" fill="#2563EB" rx="10" />
      {/* Van cabin */}
      <path d="M 52 94 L 52 68 Q 52 56 65 56 L 168 56 Q 185 56 185 73 L 185 94 Z" fill="#1D4ED8" />
      {/* Windshield */}
      <rect x="68" y="63" width="46" height="28" fill="#93C5FD" rx="5" opacity="0.9" />
      <rect x="73" y="68" width="10" height="14" fill="white" rx="3" opacity="0.3" />
      {/* Passenger window */}
      <rect x="122" y="63" width="42" height="28" fill="#93C5FD" rx="5" opacity="0.9" />
      {/* Side window */}
      <rect x="30" y="102" width="30" height="22" fill="#93C5FD" rx="4" opacity="0.7" />
      {/* Medical cross */}
      <rect x="88" y="104" width="44" height="13" fill="#EF4444" rx="5" />
      <rect x="104" y="90" width="13" height="42" fill="#EF4444" rx="5" />
      {/* Cross shine */}
      <rect x="88" y="104" width="44" height="5" fill="white" rx="2" opacity="0.2" />
      {/* Headlights */}
      <rect x="22" y="114" width="9" height="14" fill="#FDE68A" rx="3" />
      <rect x="182" y="114" width="9" height="14" fill="#FCA5A5" rx="3" />
      {/* Wheels */}
      <circle cx="70" cy="156" r="18" fill="#1F2937" />
      <circle cx="70" cy="156" r="10" fill="#4B5563" />
      <circle cx="70" cy="156" r="4" fill="#9CA3AF" />
      <circle cx="150" cy="156" r="18" fill="#1F2937" />
      <circle cx="150" cy="156" r="10" fill="#4B5563" />
      <circle cx="150" cy="156" r="4" fill="#9CA3AF" />
      {/* Floating heart */}
      <path d="M 18 54 C 18 48 24 45 27 48 C 30 45 36 48 36 54 C 36 59 27 66 27 66 C 27 66 18 59 18 54 Z" fill="#EF4444" />
      <path d="M 20 52 C 21 51 24 51 25 52" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
    </svg>
  );
}

export function WheelchairIllustration() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="wc-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FEF9EE" />
          <stop offset="100%" stopColor="#FEF3C7" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#wc-bg)" />
      {/* Ground */}
      <rect x="0" y="178" width="200" height="22" fill="#D1FAE5" />
      <rect x="0" y="178" width="200" height="5" fill="#A7F3D0" />
      {/* Caregiver head */}
      <circle cx="140" cy="72" r="17" fill="#FDE68A" />
      <circle cx="135" cy="69" r="2.5" fill="#374151" />
      <circle cx="145" cy="69" r="2.5" fill="#374151" />
      <path d="M 134 77 Q 140 83 146 77" stroke="#374151" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Caregiver hair */}
      <path d="M 123 68 Q 125 54 140 52 Q 155 54 157 68" fill="#C4902A" />
      {/* Caregiver body */}
      <rect x="126" y="89" width="28" height="50" fill="#C4902A" rx="8" />
      {/* Caregiver arms */}
      <path d="M 126 100 Q 106 110 104 130" stroke="#FDE68A" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M 154 100 Q 156 118 152 132" stroke="#C4902A" strokeWidth="8" strokeLinecap="round" fill="none" />
      {/* Caregiver legs */}
      <rect x="129" y="137" width="12" height="40" fill="#1D4ED8" rx="5" />
      <rect x="143" y="137" width="12" height="40" fill="#1D4ED8" rx="5" />
      <ellipse cx="135" cy="178" rx="12" ry="5" fill="#1F2937" />
      <ellipse cx="149" cy="178" rx="12" ry="5" fill="#1F2937" />
      {/* Wheelchair frame */}
      <path d="M 48 97 L 48 163 L 106 163" stroke="#6B7280" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 48 97 L 104 97 L 106 163" stroke="#6B7280" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Seat */}
      <rect x="46" y="94" width="59" height="9" fill="#60A5FA" rx="4" />
      {/* Backrest */}
      <rect x="46" y="70" width="8" height="30" fill="#60A5FA" rx="4" />
      {/* Armrest */}
      <rect x="46" y="89" width="32" height="5" fill="#93C5FD" rx="2.5" />
      {/* Footrest */}
      <path d="M 48 161 L 30 165 L 30 172" stroke="#6B7280" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Big wheel */}
      <circle cx="52" cy="163" r="26" fill="none" stroke="#374151" strokeWidth="5" />
      <circle cx="52" cy="163" r="5" fill="#374151" />
      <line x1="52" y1="137" x2="52" y2="189" stroke="#374151" strokeWidth="2.5" />
      <line x1="26" y1="163" x2="78" y2="163" stroke="#374151" strokeWidth="2.5" />
      <line x1="34" y1="145" x2="70" y2="181" stroke="#374151" strokeWidth="2.5" />
      <line x1="70" y1="145" x2="34" y2="181" stroke="#374151" strokeWidth="2.5" />
      {/* Small front wheel */}
      <circle cx="107" cy="163" r="16" fill="none" stroke="#374151" strokeWidth="4" />
      <circle cx="107" cy="163" r="4" fill="#374151" />
      {/* Person in wheelchair - head */}
      <circle cx="75" cy="58" r="16" fill="#FDE68A" />
      <circle cx="70" cy="56" r="2.5" fill="#374151" />
      <circle cx="80" cy="56" r="2.5" fill="#374151" />
      <path d="M 69 63 Q 75 69 81 63" stroke="#374151" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Person body */}
      <rect x="58" y="74" width="38" height="22" fill="#10B981" rx="7" />
      {/* Person arm on wheel */}
      <path d="M 95 84 Q 106 92 103 110" stroke="#FDE68A" strokeWidth="7" strokeLinecap="round" fill="none" />
      {/* Heart between them */}
      <path d="M 112 52 C 112 46 117 43 120 46 C 123 43 128 46 128 52 C 128 57 120 64 120 64 C 120 64 112 57 112 52 Z" fill="#EF4444" />
      <path d="M 114 50 C 115 49 118 49 119 50" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
    </svg>
  );
}

export function DoctorDialysisIllustration() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="dd-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ECFDF5" />
          <stop offset="100%" stopColor="#D1FAE5" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#dd-bg)" />
      {/* Doctor head */}
      <circle cx="78" cy="52" r="22" fill="#FDE68A" />
      <circle cx="72" cy="49" r="3" fill="#374151" />
      <circle cx="86" cy="49" r="3" fill="#374151" />
      <path d="M 71 58 Q 79 65 87 58" stroke="#374151" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Doctor hair */}
      <path d="M 56 50 Q 58 32 78 30 Q 98 32 100 50" fill="#C4902A" />
      {/* White coat */}
      <rect x="52" y="74" width="52" height="70" fill="white" rx="10" />
      <rect x="52" y="74" width="13" height="70" fill="#F3F4F6" rx="6" />
      <rect x="91" y="74" width="13" height="70" fill="#F3F4F6" rx="6" />
      {/* Shirt */}
      <rect x="65" y="74" width="26" height="70" fill="#BFDBFE" rx="3" />
      {/* Doctor arms */}
      <path d="M 52 86 Q 36 100 32 120" stroke="#FDE68A" strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M 104 86 Q 120 100 124 120" stroke="#FDE68A" strokeWidth="10" strokeLinecap="round" fill="none" />
      {/* Clipboard */}
      <rect x="118" y="112" width="24" height="30" fill="#FFFBEB" rx="3" stroke="#C4902A" strokeWidth="2" />
      <rect x="124" y="107" width="12" height="7" fill="#C4902A" rx="2" />
      <line x1="122" y1="121" x2="138" y2="121" stroke="#C4902A" strokeWidth="1.5" />
      <line x1="122" y1="126" x2="138" y2="126" stroke="#C4902A" strokeWidth="1.5" />
      <line x1="122" y1="131" x2="132" y2="131" stroke="#C4902A" strokeWidth="1.5" />
      {/* Doctor legs */}
      <rect x="60" y="142" width="16" height="48" fill="#1D4ED8" rx="5" />
      <rect x="80" y="142" width="16" height="48" fill="#1D4ED8" rx="5" />
      <ellipse cx="68" cy="191" rx="13" ry="5" fill="#1F2937" />
      <ellipse cx="88" cy="191" rx="13" ry="5" fill="#1F2937" />
      {/* Stethoscope */}
      <circle cx="78" cy="118" r="9" fill="none" stroke="#374151" strokeWidth="3" />
      <path d="M 78 109 Q 78 92 91 87 Q 100 83 104 76" stroke="#374151" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 78 109 Q 78 92 65 87 Q 56 83 52 76" stroke="#374151" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="104" cy="73" r="5" fill="#374151" />
      <circle cx="52" cy="73" r="5" fill="#374151" />
      {/* Medical cross badge */}
      <circle cx="158" cy="60" r="26" fill="white" stroke="#EF4444" strokeWidth="3" />
      <rect x="146" y="56" width="24" height="8" fill="#EF4444" rx="3" />
      <rect x="154" y="48" width="8" height="24" fill="#EF4444" rx="3" />
      {/* Clock */}
      <circle cx="158" cy="138" r="24" fill="white" stroke="#C4902A" strokeWidth="3" />
      <circle cx="158" cy="138" r="3" fill="#374151" />
      <line x1="158" y1="138" x2="158" y2="118" stroke="#374151" strokeWidth="3" strokeLinecap="round" />
      <line x1="158" y1="138" x2="173" y2="147" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
      <circle cx="158" cy="116" r="2" fill="#9CA3AF" />
      <circle cx="158" cy="160" r="2" fill="#9CA3AF" />
      <circle cx="136" cy="138" r="2" fill="#9CA3AF" />
      <circle cx="180" cy="138" r="2" fill="#9CA3AF" />
    </svg>
  );
}

export function HospitalDischargeIllustration() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="hd-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EEF2FF" />
          <stop offset="100%" stopColor="#E0E7FF" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#hd-bg)" />
      {/* Sun */}
      <circle cx="172" cy="28" r="16" fill="#FCD34D" />
      {/* Hospital */}
      <rect x="8" y="75" width="82" height="112" fill="white" stroke="#E5E7EB" strokeWidth="2" />
      <rect x="8" y="58" width="82" height="22" fill="#6366F1" />
      {/* Windows */}
      <rect x="16" y="84" width="16" height="16" fill="#BAE6FD" rx="2" />
      <rect x="42" y="84" width="16" height="16" fill="#BAE6FD" rx="2" />
      <rect x="68" y="84" width="16" height="16" fill="#BAE6FD" rx="2" />
      <rect x="16" y="110" width="16" height="16" fill="#BAE6FD" rx="2" />
      <rect x="68" y="110" width="16" height="16" fill="#BAE6FD" rx="2" />
      {/* Hospital cross */}
      <rect x="38" y="99" width="22" height="8" fill="#EF4444" rx="3" />
      <rect x="44" y="93" width="10" height="20" fill="#EF4444" rx="3" />
      {/* Hospital sign bar */}
      <rect x="18" y="62" width="62" height="11" fill="white" opacity="0.85" rx="2" />
      {/* H letters (instead of text) */}
      <rect x="22" y="64" width="3" height="7" fill="#6366F1" rx="1" />
      <rect x="28" y="64" width="3" height="7" fill="#6366F1" rx="1" />
      <rect x="22" y="67" width="9" height="2" fill="#6366F1" rx="1" />
      {/* Door */}
      <rect x="32" y="148" width="34" height="39" fill="#C7D2FE" stroke="#6366F1" strokeWidth="2" />
      <line x1="49" y1="148" x2="49" y2="187" stroke="#6366F1" strokeWidth="1.5" />
      <circle cx="62" cy="168" r="2" fill="#6366F1" />
      {/* Path */}
      <path d="M 90 168 Q 128 168 138 154" stroke="#C4902A" strokeWidth="3" strokeDasharray="7 5" fill="none" />
      {/* House */}
      <rect x="138" y="130" width="52" height="57" fill="#FEF3C7" stroke="#C4902A" strokeWidth="2" />
      <path d="M 133 133 L 164 108 L 195 133 Z" fill="#C4902A" />
      <rect x="148" y="158" width="14" height="29" fill="#92400E" rx="2" />
      <rect x="140" y="138" width="14" height="14" fill="#93C5FD" rx="2" />
      <rect x="160" y="138" width="14" height="14" fill="#93C5FD" rx="2" />
      <circle cx="155" cy="173" r="2" fill="#C4902A" />
      {/* Walking person */}
      <circle cx="116" cy="140" r="11" fill="#FDE68A" />
      <circle cx="113" cy="139" r="1.5" fill="#374151" />
      <circle cx="119" cy="139" r="1.5" fill="#374151" />
      <path d="M 112 145 Q 116 149 120 145" stroke="#374151" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <rect x="109" y="151" width="16" height="22" fill="#10B981" rx="4" />
      <path d="M 112 173 L 108 187" stroke="#1D4ED8" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M 120 173 L 124 187" stroke="#1D4ED8" strokeWidth="5" strokeLinecap="round" fill="none" />
      {/* Bag */}
      <rect x="125" y="155" width="13" height="15" fill="#C4902A" rx="3" />
      <path d="M 125 158 Q 131 154 138 158" stroke="#92400E" strokeWidth="2" fill="none" />
      {/* Checkmark */}
      <circle cx="164" cy="62" r="18" fill="#10B981" />
      <path d="M 155 62 L 162 70 L 173 54" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SchoolWorkIllustration() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="sw-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="100%" stopColor="#FEF3C7" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#sw-bg)" />
      {/* Sun */}
      <circle cx="172" cy="30" r="16" fill="#FCD34D" />
      {/* Road */}
      <rect x="0" y="150" width="200" height="50" fill="#D1D5DB" />
      <rect x="0" y="150" width="200" height="5" fill="#9CA3AF" />
      <rect x="10" y="170" width="28" height="5" fill="white" rx="2.5" opacity="0.8" />
      <rect x="86" y="170" width="28" height="5" fill="white" rx="2.5" opacity="0.8" />
      <rect x="162" y="170" width="28" height="5" fill="white" rx="2.5" opacity="0.8" />
      {/* Bus shadow */}
      <ellipse cx="100" cy="153" rx="78" ry="6" fill="black" opacity="0.1" />
      {/* Bus body */}
      <rect x="12" y="90" width="175" height="64" fill="#FCD34D" rx="10" />
      {/* Bus front panel */}
      <rect x="12" y="110" width="30" height="44" fill="#F59E0B" rx="6" />
      {/* Bus rear panel */}
      <rect x="173" y="110" width="14" height="44" fill="#F59E0B" rx="6" />
      {/* Windshield */}
      <rect x="14" y="95" width="24" height="25" fill="#BAE6FD" rx="4" opacity="0.9" />
      <rect x="16" y="97" width="8" height="14" fill="white" rx="2" opacity="0.3" />
      {/* Passenger windows */}
      <rect x="44" y="97" width="26" height="22" fill="#BAE6FD" rx="4" opacity="0.9" />
      <rect x="78" y="97" width="26" height="22" fill="#BAE6FD" rx="4" opacity="0.9" />
      <rect x="112" y="97" width="26" height="22" fill="#BAE6FD" rx="4" opacity="0.9" />
      <rect x="146" y="97" width="26" height="22" fill="#BAE6FD" rx="4" opacity="0.9" />
      {/* Window highlights */}
      <rect x="46" y="99" width="8" height="11" fill="white" rx="2" opacity="0.3" />
      <rect x="80" y="99" width="8" height="11" fill="white" rx="2" opacity="0.3" />
      {/* Blue stripe */}
      <rect x="12" y="126" width="175" height="10" fill="#2563EB" opacity="0.2" />
      {/* Door */}
      <rect x="22" y="120" width="15" height="34" fill="#FDE68A" rx="3" stroke="#F59E0B" strokeWidth="2" />
      <line x1="29" y1="120" x2="29" y2="154" stroke="#F59E0B" strokeWidth="1.5" />
      {/* Lights front */}
      <rect x="12" y="92" width="10" height="8" fill="#FCA5A5" rx="2" />
      <rect x="12" y="102" width="10" height="8" fill="#FDE68A" rx="2" />
      {/* Lights rear */}
      <rect x="181" y="92" width="10" height="8" fill="#FCA5A5" rx="2" />
      {/* Wheels */}
      <circle cx="56" cy="154" r="19" fill="#1F2937" />
      <circle cx="56" cy="154" r="10" fill="#4B5563" />
      <circle cx="56" cy="154" r="4" fill="#9CA3AF" />
      <circle cx="152" cy="154" r="19" fill="#1F2937" />
      <circle cx="152" cy="154" r="10" fill="#4B5563" />
      <circle cx="152" cy="154" r="4" fill="#9CA3AF" />
      {/* Floating backpack */}
      <rect x="148" y="36" width="26" height="32" fill="#6366F1" rx="6" />
      <rect x="150" y="33" width="22" height="7" fill="#4F46E5" rx="3" />
      <rect x="154" y="29" width="14" height="9" fill="#4F46E5" rx="4" />
      <line x1="149" y1="50" x2="149" y2="66" stroke="#4F46E5" strokeWidth="3.5" />
      <line x1="173" y1="50" x2="173" y2="66" stroke="#4F46E5" strokeWidth="3.5" />
      <circle cx="161" cy="54" r="4" fill="#C7D2FE" />
      {/* Floating briefcase */}
      <rect x="18" y="40" width="34" height="26" fill="#C4902A" rx="6" />
      <rect x="24" y="35" width="22" height="9" fill="#92400E" rx="4" />
      <line x1="18" y1="53" x2="52" y2="53" stroke="#92400E" strokeWidth="2" />
      <circle cx="35" cy="53" r="3" fill="#92400E" />
    </svg>
  );
}

export function LocalTransportIllustration() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="lt-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F0FDF4" />
          <stop offset="100%" stopColor="#DCFCE7" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#lt-bg)" />
      {/* Map card */}
      <rect x="12" y="12" width="176" height="176" fill="white" rx="14" opacity="0.55" />
      {/* Roads */}
      <rect x="12" y="90" width="176" height="15" fill="#E5E7EB" />
      <rect x="90" y="12" width="15" height="176" fill="#E5E7EB" />
      {/* Road markings */}
      <rect x="26" y="95" width="20" height="4" fill="white" rx="2" />
      <rect x="60" y="95" width="20" height="4" fill="white" rx="2" />
      <rect x="130" y="95" width="20" height="4" fill="white" rx="2" />
      <rect x="164" y="95" width="20" height="4" fill="white" rx="2" />
      <rect x="95" y="26" width="4" height="20" fill="white" rx="2" />
      <rect x="95" y="60" width="4" height="20" fill="white" rx="2" />
      <rect x="95" y="130" width="4" height="20" fill="white" rx="2" />
      <rect x="95" y="164" width="4" height="20" fill="white" rx="2" />
      {/* Dotted route */}
      <path d="M 40 97 Q 40 40 97 40" stroke="#C4902A" strokeWidth="3.5" strokeDasharray="8 5" fill="none" />
      {/* Start pin */}
      <path d="M 40 132 C 40 120 26 112 26 103 C 26 88 54 88 54 103 C 54 112 40 120 40 132 Z" fill="#EF4444" />
      <circle cx="40" cy="103" r="9" fill="white" />
      <circle cx="40" cy="103" r="4" fill="#EF4444" />
      {/* End pin */}
      <path d="M 97 76 C 97 64 83 56 83 47 C 83 32 111 32 111 47 C 111 56 97 64 97 76 Z" fill="#10B981" />
      <circle cx="97" cy="47" r="9" fill="white" />
      <circle cx="97" cy="47" r="4" fill="#10B981" />
      {/* Car */}
      <rect x="63" y="86" width="34" height="20" fill="#2563EB" rx="5" />
      <path d="M 68 86 L 71 76 L 92 76 L 95 86 Z" fill="#1D4ED8" />
      <rect x="71" y="79" width="9" height="8" fill="#BAE6FD" rx="2" opacity="0.9" />
      <rect x="83" y="79" width="9" height="8" fill="#BAE6FD" rx="2" opacity="0.9" />
      <rect x="63" y="91" width="6" height="5" fill="#FDE68A" rx="1" />
      <rect x="91" y="91" width="6" height="5" fill="#FCA5A5" rx="1" />
      <circle cx="73" cy="107" r="8" fill="#1F2937" />
      <circle cx="73" cy="107" r="4" fill="#6B7280" />
      <circle cx="90" cy="107" r="8" fill="#1F2937" />
      <circle cx="90" cy="107" r="4" fill="#6B7280" />
      {/* Columbus label */}
      <rect x="118" y="124" width="66" height="22" fill="#C4902A" rx="6" />
      <rect x="124" y="128" width="54" height="3" fill="white" rx="1.5" opacity="0.5" />
      <rect x="128" y="134" width="46" height="3" fill="white" rx="1.5" opacity="0.8" />
      <rect x="132" y="140" width="38" height="3" fill="white" rx="1.5" opacity="0.5" />
      {/* Compass */}
      <circle cx="160" cy="168" r="20" fill="white" stroke="#C4902A" strokeWidth="2.5" opacity="0.9" />
      <line x1="160" y1="152" x2="160" y2="148" stroke="#C4902A" strokeWidth="2" strokeLinecap="round" />
      <line x1="160" y1="184" x2="160" y2="188" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" />
      <line x1="144" y1="168" x2="140" y2="168" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" />
      <line x1="176" y1="168" x2="180" y2="168" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" />
      <polygon points="160,153 157,168 160,165 163,168" fill="#EF4444" />
      <polygon points="160,183 157,168 160,171 163,168" fill="#6B7280" />
    </svg>
  );
}

export const serviceIllustrations: Record<string, React.ComponentType> = {
  nemt: MedicalTransportIllustration,
  wheelchair: WheelchairIllustration,
  dialysis: DoctorDialysisIllustration,
  discharge: HospitalDischargeIllustration,
  school: SchoolWorkIllustration,
  local: LocalTransportIllustration,
};
