export default function ContactLocations() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="bg-gradient-to-r from-[#0A4FBF] to-[#0D3C8A]">
        {/* Diagonal overlay */}
        <div className="absolute inset-0 bg-[#0B3E91] clip-diagonal opacity-70"></div>

        <div className="relative container mx-auto px-6 max-w-7xl py-12">
          <div className="grid md:grid-cols-3 gap-10 text-white">
            
            {/* India */}
            <div className="space-y-2 text-sm">
              <h4 className="font-semibold text-base">India</h4>
              <p>Samira.s@healingwayz.com</p>
              <p>+91 73032 09547</p>
              <p>Sector 128, Wish Town, Noida,</p>
              <p>Uttar Pradesh.</p>
              <p>www.healingwayz.com</p>
            </div>

            {/* Cameroon */}
            <div className="space-y-2 text-sm">
              <h4 className="font-semibold text-base">Cameroon</h4>
              <p>contact@healingwayz.com</p>
              <p>+237 6 99 78 71 29</p>
              <p>Douala - Akwa, Cameroon</p>
              <p>www.healingwayz.com</p>
            </div>

            {/* Nigeria */}
            <div className="space-y-2 text-sm">
              <h4 className="font-semibold text-base">Nigeria</h4>
              <p>franckmoore@healingwayz.com</p>
              <p>+234 816 977 4365</p>
              <p>4 Beach Road, Ahmadu Bello Way,</p>
              <p>Jos, Nigeria</p>
            </div>

          </div>
        </div>
      </div>

      {/* Custom diagonal clip */}
      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(70% 0, 100% 0, 100% 100%, 40% 100%);
        }
      `}</style>
    </section>
  );
}

