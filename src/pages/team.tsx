import { Members } from '@/components/Members'
import DefaultLayout from '@/layouts/default'

const Team = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center ">
        <Members />
      </div>
    </DefaultLayout>
  )
}

export default Team
