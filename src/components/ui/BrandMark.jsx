import logo from '../../assets/brand/yd-logo.png'

/**
 * The YD logo on a slowly changing violet shape.
 * The shape turns and changes form; the logo stays still and upright.
 */
export default function BrandMark({ className = '' }) {
  return (
    <div aria-hidden="true" className={`relative flex items-center justify-center ${className}`}>
      <div className="morph morph-strong absolute inset-0 opacity-60" style={{ animationDuration: '13s' }} />
      <img src={logo} alt="" width="478" height="360" loading="lazy" className="relative w-[52%]" />
    </div>
  )
}
