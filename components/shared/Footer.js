import { Heart } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-6 bg-gray-900">
        <div className="mycontainer px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex gap-2 text-sm text-white">
              © 2023 GetMeAChai. All rights reserved.
            </div>
            <div className="flex items-center space-x-1">
              <Heart className="h-6 w-6 text-white" />
              <span className="text-sm text-white">Made with love for creators</span>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
